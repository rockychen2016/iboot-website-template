/**
 * 服务端渲染API
 */

import { getHttpOpts, getHttpOptsByHeaders, HttpClient, HttpToken, ResultModel } from "@/utils/http";
import { NextRequest, NextResponse } from "next/server";
import { randomString, urlParamToJson } from "@/utils/string";
import { API, APIMAP } from "./api";
import { cookies } from "next/headers";
import { routerSetLocale } from "@/i18n/service";
import { ChannelPageContent, HomePageContent, ProductPageContent } from "./types/web-page";
import { defaultLocale } from "@/i18n/config";

export const startRequest = async (method: 'GET' | 'POST', request: NextRequest) => {
    const m: string = request.nextUrl.searchParams.get('m') ?? 'unkown';
    const url = APIMAP[m];
    if (url.length === 0) {
        const error: ResultModel<unknown> = {
            code: 404,
            success: false
        }
        return NextResponse.json(error);
    }
    const httpOpts = getHttpOpts(request);
    httpOpts.userType = '1';     //C端用户注册
    const http = new HttpClient(httpOpts);
    let token: HttpToken | undefined = undefined;
    if (url.startsWith("admin/") || url.startsWith("api/")) {
        token = http.getToken(request);
        if (token.username.length == 0 || token.token.length == 0) {
            const error: ResultModel<unknown> = {
                code: 409,
                success: false
            }
            return NextResponse.json(error);
        }
    }
    let res = null;
    if (method === 'GET') {
        const body = request.nextUrl.searchParams.toString();
        const params = urlParamToJson(body.toString(), ['m']);
        //console.debug('Get >>>> ', JSON.stringify(params));
        res = await http.get({
            url: url,
            data: params,
            token: token
        })
    } else {
        const contentType = request.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            const data = await request.json();
            res = await http.post({
                url: url,
                data: data,
                token: token
            });
        } else if (contentType.includes("multipart/form-data")) {
            console.debug('multipart/form-data')
            const boundaryMatch = contentType.match(/boundary=([^\s;]+)/);
            if (!boundaryMatch) {
                const error: ResultModel<unknown> = {
                    code: 411,
                    success: false
                }
                return NextResponse.json(error);
            }
            const boundary = boundaryMatch[1];
            const copyRequest = request.clone();
            const formData = await request.formData();
            const buffer = await copyRequest.arrayBuffer();
            //eslint-disable-next-line @typescript-eslint/no-explicit-any
            const data: Record<string, any> = {
                "boundary": boundary,
                "buffer": Buffer.from(buffer)
            }
            formData.keys().forEach(key => {
                if (key != 'file') {
                    data[key] = formData.get(key);
                }
            })
            res = await http.post({
                url: url,
                data: data,
                token: token
            });

        } else {
            const error: ResultModel<unknown> = {
                code: 410,
                success: false
            }
            return NextResponse.json(error);
        }
    }
    const response = NextResponse.json(res);
    if (res.success) {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any = res.data;
        switch (url) {
            case APIMAP[API[API.curWebsite]]:
                const website = data as Website;
                const lang = website.language.replaceAll('_', '-');
                routerSetLocale(response, lang as I18N, website.id, website.websiteNo);
                return response;
            case APIMAP[API[API.login]]:
                return http.setToken(data, response);
            case APIMAP[API[API.logout]]:
                return http.cleanToken(response);
            default:
                break;
        }
    }
    return response;
}

const doGet = async <T>(api: API, opts?: {
    data?: Record<string, string>
}) => {
    const url = APIMAP[API[api]];
    const cookieStore = await cookies();
    const headsObj = getHttpOptsByHeaders(cookieStore);
    const http = new HttpClient(headsObj);
    const token: HttpToken | undefined = http.getTokenByCookies(cookieStore);
    const res = await http.get<T>({
        "url": url,
        "data": opts?.data,
        "token": token
    });
    if (res.success) {
        const data = res.data!;
        return data;
    }
    throw res.msg
}

const doPost = async <T>(api: API, opts?: {
    data?: Record<string, string>,
}) => {
    const url = APIMAP[API[api]];
    const cookieStore = await cookies();
    const headsObj = getHttpOptsByHeaders(cookieStore);
    const http = new HttpClient(headsObj);
    const token: HttpToken | undefined = http.getTokenByCookies(cookieStore);
    const res = await http.post<T>({
        "url": url,
        "data": opts?.data,
        "token": token
    });
    if (res.success) {
        const data = res.data!;
        return data;
    }
    throw res.msg
}

export const Logger = async (path: string, locale: string, request: NextRequest) => {
    const params = request.nextUrl.searchParams;
    const referer = request.headers.get('referer') || '';
    const userAgent = request.headers.get('user-agent') || '';
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwardedFor?.split(',')[0]?.trim() || realIp || 'unknown';
    console.log("URI >>> ", path, ', Referer >>> ', referer, ', User-Agent >>> ', userAgent, ', IP >>> ', ip, ", Locale >>>", locale, ', Params >>> ', JSON.stringify(Object.fromEntries(params)));

    //TODO 记录日志到数据库
    const p: Record<string, string> = {
        "uri": path,
        "referer": referer,
        "userAgent": userAgent,
        "ipAddress": ip,
        "language": locale,
        "params": JSON.stringify(Object.fromEntries(params))
    };
    try {
        await doPost<undefined>(API.logger, { data: p });
    } catch (err) {
        console.error('Logger error >>> ', err);
    }
}

export const SetRequestHeader = async (request: NextRequest, response: NextResponse) => {
    const locale = request.cookies.get('NEXT_LOCALE')?.value;
    if (locale && locale.length > 0) {
        request.headers.set('lang', locale);
    } else {
        request.headers.set('lang', defaultLocale);
        response.cookies.set('NEXT_LOCALE', defaultLocale)
    }

    const deviceId = request.cookies.get('NEXT_DEVICE_ID')?.value;
    if (deviceId && deviceId.length > 0) {
        request.headers.set('dvid', deviceId);
    } else {
        const dvid = randomString(10);
        request.headers.set('dvid', dvid);
        response.cookies.set('NEXT_DEVICE_ID', dvid);
    }

    const websiteId = request.cookies.get('NEXT_WEBSITE_ID')?.value;
    const websiteNo = request.cookies.get('NEXT_WEBSITE_NO')?.value;
    if (websiteId && websiteId.length > 0 && websiteNo && websiteNo.length > 0) {
        request.headers.set('webid', websiteId);
        request.headers.set('webno', websiteNo);
    } else {
        const model = await GetCurWebsite();
        const websiteId = model.id;//'C35705332558860288'; //process.env.DEFAULT_WEBSITE_ID || 'default-website-id';
        const websiteNo = model.websiteNo; //'4900003854'; //process.env.DEFAULT_WEBSITE_NO || 'default-website-no';
        request.headers.set('webid', websiteId);
        request.headers.set('webno', websiteNo);
        const lang = model.language.replaceAll('_', '-');
        request.headers.set('lang', lang);

        response.cookies.set('NEXT_LOCALE', lang)
        response.cookies.set('NEXT_WEBSITE_ID', websiteId);
        response.cookies.set('NEXT_WEBSITE_NO', websiteNo);
    }
}


/**
 * 获取I18N网站列表
 * @returns I18N网站列表 Array<I18NWebSite>
 */
export const GetI18NList = async () => {
    const res = await doGet<Array<I18NWebSite>>(API.i18nList)
    if (res) {
        return res
    }
    return [];
}

/**
 * 获取当前网站
 * @returns 
 */
export const GetCurWebsite = async () => {
    return await doGet<Website>(API.curWebsite);
}

const metaData = (name: string, seo?: SeoProps) => {
    return {
        title: {
            default: `${name}-${(seo?.title || ''.length > 0 ? `${seo?.title}` : '')}`,
            template: `%s - ${name}`,
        },
        keywords: seo?.keywords ?? '',
        description: seo?.description ?? '',
        icons: {
            icon: "/favicon.ico",
        },
    }
}

/**
 * 获取网站元信息及详情内容
 * @returns 
 */
export const GetHomeWeb = async (): Promise<HomePageContent> => {
    const res = await GetCurWebsite();
    if (res) {
        return {
            metadata: metaData(res.name, res.seoProps),
            content: res
        }
    }
    throw Error('An error occurred on the web page.')
}

/**
 * 通过栏目ID获取栏目详情(单页内容)
 * @param channelId     拦目ID
 * @param showChildren  是否显示下级栏目
 * @returns 
 */
export const GetChannelById = async (channelId: string, showChildren?: boolean): Promise<ChannelPageContent> => {
    const res = await doGet<WebChannel>(API.getChannelById, { data: { "channelId": channelId, "showChildren": showChildren ? 'true' : 'false' } })
    if (res) {
        return {
            metadata: metaData(res.name, res.seoProps),
            content: res
        }
    }
    throw Error('An error occurred on the web page.')
}

/**
 * 通过栏目URI获取栏目详情
 * @param uri  栏目URI,如/product
 * @param showChildren  是否显示下级样栏目
 * @returns 
 */
export const GetChannelByUrl = async (uri: string, showChildren?: boolean): Promise<ChannelPageContent> => {
    const res = await doGet<WebChannel>(API.getChannelByUrl, { data: { "uri": uri, "showChildren": showChildren ? 'true' : 'false' } });
    if (res) {
        return {
            metadata: metaData(res.name, res.seoProps),
            content: res
        }
    }
    throw Error('An error occurred on the web page.')
}


/**
 * 获取栏目列表
 * @param channelNo 如果为空则取根栏目,否则获取下一级栏目(只是一级)
 * @param showChildren 是否获取子栏目
 * @returns Array<WebChannel>
 */
export const GetWebChannelListByNo = async (channelNo?: string, showChildren?: boolean) => {
    const res = await doGet<Array<WebChannel>>(API.getChannelListByNo, {
        data: {
            "channelNo": channelNo ?? '',
            "showChildren": showChildren ? 'true' : 'false'
        }
    });
    if (res) {
        return [...res]
    }
    return []
}

/**
 * 依URI获取下级栏目列表
 * @param uri -uri 如 "/product"
 * @returns Array<WebChannel>
 */
export const GetWebChannelListByUri = async (uri: string) => {
    const res = await doGet<Array<WebChannel>>(API.getChannelListByUri, {
        data: {
            "uri": uri,
            "showChildren": 'true'
        }
    });
    if (res) {
        return [...res]
    }
    return []
}


/**
 * 分页获取产品
 * @param param0
 * @returns 
 */
export const GetProductForPage = async ({
    channelId, //栏目ID
    keyword,
    pageNo,
    pageSize,
    sortBy = 'createTime',
    sort = 'DESC'
}: Readonly<{
    channelId?: string,
    keyword?: string,
    pageNo: number,
    pageSize: number,
    sortBy?: string,
    sort?: 'DESC' | 'ASC' | ''
}>) => {
    return await doGet<PageInfo<ProductContent>>(API.searchProductForPage, {
        data: {
            pageNo: pageNo.toString(),
            pageSize: pageSize.toString(),
            channelId: channelId ?? '',
            keyword: keyword ?? '',
            sort: sort ?? '',
            sortBy: sortBy ?? ''
        }
    });
}

/**
 * 通过分组编号分页获取产品
 * @param param0 
 * @returns PageInfo<ProductContent>
 */
export const GetProductForPageByGroup = async ({
    groupNo,
    pageNo,
    pageSize
}: Readonly<{
    groupNo: string,
    pageNo: number,
    pageSize: number
}>) => {
    return await doGet<PageInfo<ProductContent>>(API.searchProductForPageByGroup, {
        data: {
            pageNo: pageNo.toString(),
            pageSize: pageSize.toString(),
            groupNo: groupNo
        }
    });
}

/**
 * 通过分组编号获取产品列表
 * @param groupId 
 * @returns Array<ProductContent>
 */
export const GetProductsByGroup = async (groupId: string) => {
    return await doGet<Array<ProductContent>>(API.searchProductByGroup, {
        data: {
            groupId: groupId
        }
    });
}

/**
 * 获详产品详情
 * @param productId      -产品ID 
 * @param attachmentType -为空表示获取所有附件类型。获取附件类型  'image' | 'video' | 'audio' | 'file';
 * @returns ProductContent
 */
export const GetProductDetailWeb = async (productId: string, attachmentType?: AttachmentType): Promise<ProductPageContent> => {
    const res = await doGet<ProductContent>(API.getProduct, {
        data: {
            "proId": productId,
            "attachmentType": attachmentType ?? ''
        }
    });
    if (res) {
        return {
            metadata: metaData(res.proName, res.seoProps),
            content: res
        }
    }
    throw Error('An error occurred on the web page.')
}

/**
 * 获取评论内容, 
 * contentNo(内容编号)为空表示不限内容的评论，不为空表示获取指定内容的论评
 * rowCount(获取记录数，为空表示所有评论)
 * @param param0 {contentNo?:string, rowCount?:number}
 * @returns 
 */
export const GetReviewList = async ({
    contentNo,
    rowCount = 3,
}: Readonly<{
    contentNo?: string,
    rowCount?: number,
}>) => {
    return await doGet<Array<Reviews>>(API.getReviewList, {
        data: {
            "entityNo": contentNo ?? '',
            "rowCount": rowCount?.toString() ?? ''
        }
    });
}
