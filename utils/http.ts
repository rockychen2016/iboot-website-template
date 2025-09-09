import md5 from "js-md5";

import { NextRequest, NextResponse } from "next/server";

import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import CryptoJS from 'crypto-js';
import { ErrorToast, SuccessToast } from "./toast";
import { isArray } from "./array";
import { randomString, urlDecode, urlParamToJson } from "./string";
import { User } from "@/app/api/server/types/user";
import { _CURRENT_WEBSITE_KEY } from "@/providers/website-provider";
import { _DEVICE_ID_KEY } from "@/providers/device-provider";

type CSRFToken = {
    csrfToken: string,
    csrfHeader: string,
}

export type HttpOpts = {
    deviceId?: string,
    lang?: string,
    webid?: string,
    webno?: string,
    userType?: "0" | "1" | "2"
}

export type HttpToken = { username: string, token: string, utype: string, xcsrf?: CSRFToken };

export interface ResultModel<T> {
    code: number,
    success: boolean,
    msg?: string,
    data?: T,
    host?: string,
    errorCode?: string
}

export type ResultStream = ReadableStream<Uint8Array>

export interface ClientGetParams {
    data?: Record<string, string>,
    useCache?: boolean
}

export interface ClientPostParams {
    data?: Record<string, string> | FormData | UIFormEntities
}

export const getHttpOpts = (request: NextRequest): HttpOpts => {
    return {
        lang: request.headers.get('lang') ?? undefined,
        deviceId: request.headers.get('dvid') ?? undefined,
        webid: request.headers.get('webid') ?? undefined,
        webno: request.headers.get('webno') ?? undefined,
    }
}

export const getHttpOptsByHeaders = (headers: ReadonlyHeaders): HttpOpts => {
    return {
        lang: headers.get('lang') ?? undefined,
        deviceId: headers.get('dvid') ?? undefined,
        webid: headers.get('webid') ?? undefined,
        webno: headers.get('webno') ?? undefined
    }
}

const getRequestHead = (): {
    dvid: string,
    webid: string,
    webno: string,
} => {
    const devideId = localStorage.getItem(_DEVICE_ID_KEY) ?? ''
    const json = localStorage.getItem(_CURRENT_WEBSITE_KEY);
    const curWebsiteNumber: CurWebsiteNumbers | null = json != null ? JSON.parse(json) : null;
    return {
        dvid: devideId,
        webid: curWebsiteNumber?.websiteId ?? '',
        webno: curWebsiteNumber?.websiteNo ?? ''
    }
};

const getClientUrl = (url: string) => {
    if (url.startsWith('/api/')) {
        return url;
    }
    return `/api/server/?m=${url}`
}

export const get = async <T>(url: string, opts?: ClientGetParams): Promise<ResultModel<T>> => {
    let api = getClientUrl(url);
    if (opts?.data) {
        const params = new URLSearchParams(opts.data);
        if (api.indexOf("?m=") != -1) {
            api += `&${params}`
        } else {
            api += `?${params}`
        }
    }
    const response = await fetch(api, {
        method: 'GET',
        headers: getRequestHead(),
        cache: opts?.useCache ? 'force-cache' : 'default'
    });
    if (response.ok) {
        return await response.json();
    }
    return {
        code: response.status,
        success: false,
        msg: response.statusText
    }
}

export const iGet = async <T>(url: string, opts?: ClientGetParams): Promise<T | undefined> => {
    const res = await get<T>(url, opts);
    if (res.success) {
        return res.data as T;
    }
    ErrorToast(res.msg ?? 'API ERROR!');
    return undefined;
}

export const post = async <T>(url: string, opts?: ClientPostParams): Promise<ResultModel<T>> => {
    const api = getClientUrl(url);
    const data = opts?.data ?? {};
    let body: string | FormData;
    const proxyHeaders = new Headers(getRequestHead());
    if (!(data instanceof FormData)) {
        body = JSON.stringify(data);
        proxyHeaders.set('Content-Type', 'application/json');
    } else {
        body = data;
    }
    const response = await fetch(api, {
        method: 'POST',
        headers: proxyHeaders,
        body: body,
    });
    if (response.ok) {
        return await response.json();
    }
    return {
        code: response.status,
        success: false,
        msg: response.statusText,
    }
}

export const iPost = async <T>(url: string, opts?: ClientPostParams): Promise<T | undefined> => {
    const res = await post<T>(url, opts);
    if (res.success) {
        return res.data;
    }
    ErrorToast(res.msg ?? 'API ERROR!');
    return undefined;
}

export const iPostSuccess = async (url: string, opts?: ClientPostParams): Promise<boolean> => {
    const res = await post(url, opts);
    if (res.success) {
        SuccessToast(res.msg ?? 'SUCCESS!');
        return true;
    }
    ErrorToast(res.msg ?? 'API ERROR!');
    return false;
}

export class HttpClient {
    private readonly baseUrl: string;
    private readonly apiKey: string;
    private readonly userType: string;
    private readonly userFrom: string;
    private readonly deviceId: string;
    private readonly version: string = '1';
    private readonly lang: string;
    private readonly webid: string;
    private readonly webno: string;
    private readonly _isDebug: boolean;
    constructor({ deviceId, lang, webid, webno, userType }: Readonly<HttpOpts>) {
        this.baseUrl = process.env.BASE_URL ?? '';
        this.apiKey = process.env.API_KEY ?? '';
        this.userType = userType ?? '0';
        this.userFrom = process.env.USER_FROM || '1';
        this.deviceId = deviceId ?? randomString(10);
        this.lang = lang ?? 'zh-CN';
        this.webid = webid ?? ''
        this.webno = webno ?? ''
        this._isDebug = process.env.NODE_ENV != 'production';
    }

    isDebug() {
        return this._isDebug;
    }

    encrypt(data: string) {
        const key = CryptoJS.enc.Utf8.parse(this.apiKey);
        return CryptoJS.AES.encrypt(data, key).toString();
    }

    decrypt(data: string) {
        const key = CryptoJS.enc.Utf8.parse(this.apiKey);
        return CryptoJS.AES.decrypt(data, key, {
            mode: CryptoJS.mode.ECB,
        }).toString(CryptoJS.enc.Utf8);
    }

    getDeviceId() {
        return this.deviceId;
    }

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    private convertUrlParameter(data: Record<string, any>): string {
        const p: string[] = [];
        for (const o in data) {
            let v = data[o];
            if (v && typeof v === "string") {
                v = v.trim();
            } else if (v && typeof v === "object") {
                if (isArray(v)) {
                    if (v.length === 0) {
                        continue;
                    }
                    for (let i = 0; i < v.length; i++) {
                        const arr_item = v[i];
                        for (const item_field in arr_item) {
                            const item_field_value = arr_item[item_field] ?? undefined;
                            if (item_field_value) {
                                if (typeof item_field_value === "object") {
                                    if (isArray(item_field_value)) {
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        item_field_value.forEach((item1: any, index: number) => {
                                            if (item1) {
                                                for (const f in item1) {
                                                    const v = item1[f];
                                                    if (v && v.toString().length > 0) {
                                                        const s = `[${i.toString()}].${item_field + `[${index.toString()}].${f}`}=${urlDecode(v)}`;
                                                        p.push(o + s);
                                                    }
                                                }
                                            }
                                        });
                                    }
                                } else if (item_field_value.toString().length > 0) {
                                    const s = `[${i.toString()}].${item_field}=${urlDecode(item_field_value.toString())}`;
                                    p.push(o + s);
                                }
                            }
                        }
                    }
                } else {
                    for (const obj in v) {
                        const oValue = v[obj];
                        if (oValue != null && oValue != "" && oValue.length != 0) {
                            const s = `.${obj}=${urlDecode(oValue)}`;
                            p.push(o + s);
                        }
                    }
                }
                continue;
            } else if (v && typeof v === "function") {
                v = null;
            }

            if (v != null && v != "" && v.length != 0) {
                p.push(o + "=" + urlDecode(v));
            }
        }
        return (p && p.join("&"));
    }

    private sign(data: Record<string, object | string>): string {
        //由后台分配
        const _apiKey = "&key=" + this.apiKey;
        const arr: string[] = [];
        for (const o in data) {
            arr.push(o);
        }
        arr.sort((a: string, b: string) => {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        const res: string[] = [];
        arr.forEach((v: string) => {
            let value: object | string = data[v];
            if (typeof value === "object") {
                value = JSON.stringify(value);
            }
            res.push(v + "=" + value);
        });
        const paramsStr: string = res.join("&");
        const str = md5.md5((paramsStr + _apiKey).toLocaleUpperCase());
        if (this._isDebug) {
            console.log("排序后的参数>>>", paramsStr, ', md5 >>> ', str);
        }
        return str;
    }

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    private assemblyParameter(data?: Record<string, any>, username?: string): Record<string, any> {
        const params = data ?? {};
        params['timestamp'] = Date.now() + '';
        params['echostr'] = randomString(10);
        params['version'] = this.version;
        params['deviceId'] = this.deviceId;
        params['webid'] = this.webid;
        if (username && username.length > 0) {
            params['username'] = username;
        }
        return params;
    }

    private assemblyHeader({ urlParams, token }: Readonly<{ urlParams: string, token?: Readonly<HttpToken> }>) {
        const h: Record<string, string> = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Res-Type': 'json',
            'Device-Id': this.deviceId,
            'Lang': this.lang,
            'Web-Id': this.webid,
            'Web-No': this.webno,
            'User-Type': token?.utype ?? this.userType,
            'User-From': this.userFrom,
            'Api-Key': this.apiKey
        }
        if (token) {
            if (token.token && token.token.length > 0 && token.username && token.username.length > 0) {
                h['Authorization'] = token.token;
                h['Username'] = token.username;
            }
            if (token.xcsrf) {
                h[token.xcsrf.csrfHeader] = token.xcsrf.csrfToken;
            }
        }
        const data = urlParamToJson(urlParams);
        const sign = this.sign(data);
        h['Sign'] = sign
        return h;
    }

    async csrf(): Promise<string | undefined> {
        const res = await this.get<CSRFToken>({
            url: 'guest/csrf'
        });
        if (res.success) {
            const data = res.data;
            if (data) {
                return data["csrfToken"].toString();
            }
        }
        return undefined;
    }

    private getApiUrl(url: string): string {
        return `${this.baseUrl}/${url}`;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async get<T>({ url, data, token }: Readonly<{ url: string, data?: Record<string, any>, token?: Readonly<HttpToken> }>): Promise<ResultModel<T>> {
        const params = this.assemblyParameter(data);
        const urlParams = this.convertUrlParameter(params); //new URLSearchParams(params);
        const headers = this.assemblyHeader({ "urlParams": urlParams, "token": token });
        //const uType = token?.utype ?? this.userType;
        const api = `${this.getApiUrl(url)}?${urlParams.toString()}` //`${this.baseUrl}/${url}?${urlParams.toString()}`.format(uType === '0' ? '' : '/b');
        if (this._isDebug) {
            console.log('GET URL >>> ', api);
            console.log('HTTP HEADERS >>>', JSON.stringify(headers));
        }
        try {
            const res = await fetch(api, {
                method: 'GET',
                headers: headers,
                credentials: 'include',
                //cache: 'force-cache'
            });

            if (res.ok) {
                const result = await res.json();
                return result;
            }
            return {
                code: res.status,
                success: false,
                msg: res.statusText
            }
        } catch (e) {
            return {
                code: 500,
                success: false,
                msg: e?.toString() ?? 'Server exception!'
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async post<T>({ url, data, token }: Readonly<{ url: string, data?: Record<string, any>, token?: Readonly<HttpToken> }>): Promise<ResultModel<T>> {
        data = data ? { ...data } : {}
        const buffer = data.buffer ?? undefined;
        const boundary = data.boundary ?? undefined;
        if (buffer) {
            delete data.buffer;
        }
        if (boundary) {
            delete data.boundary;
        }
        const params = this.assemblyParameter(data);
        const urlParams = this.convertUrlParameter(params); //new URLSearchParams(params);
        const headers = this.assemblyHeader({ "urlParams": urlParams, "token": token });
        if (buffer && boundary) {
            headers['Content-Type'] = `multipart/form-data; boundary=${boundary}`;
        }
        const api = this.getApiUrl(url);
        if (this._isDebug) {
            console.debug('GET URL >>> ', api);
            console.debug('HTTP HEADERS >>> ', JSON.stringify(headers));
        }
        try {
            const url = buffer ? `${api}?${urlParams}` : api;
            const res = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: buffer ? buffer : urlParams.toString(),
                credentials: 'include'
            });
            if (res.ok) {
                const result = await res.json();
                if (this._isDebug) {
                    console.log(JSON.stringify(result));
                }
                return result;
            }
            return {
                code: res.status,
                success: false,
                msg: res.statusText
            }
        } catch (e) {
            return {
                code: 500,
                success: false,
                msg: e?.toString() ?? 'Server exception!'
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async stream({ url, data, token }: Readonly<{ url: string, data?: Record<string, any>, token?: Readonly<HttpToken> }>): Promise<NextResponse<ResultStream>> {
        data = data ? { ...data } : {}
        const buffer = data.buffer ?? undefined;
        const boundary = data.boundary ?? undefined;
        if (buffer) {
            delete data.buffer;
        }
        if (boundary) {
            delete data.boundary;
        }
        const params = this.assemblyParameter(data);
        const urlParams = this.convertUrlParameter(params); //new URLSearchParams(params);

        const headers = this.assemblyHeader({ "urlParams": urlParams, "token": token });
        if (buffer && boundary) {
            headers['Content-Type'] = `multipart/form-data; boundary=${boundary}`;
        }
        headers['Connection'] = 'keep-alive';
        headers['X-Accel-Buffering'] = 'no';  //防止 Nginx 缓存
        headers['Cache-Control'] = 'no-cache';

        const api = this.getApiUrl(url)
        if (this._isDebug) {
            console.debug('POST URL >>> ', api);
            console.debug('HTTP HEADERS >>> ', JSON.stringify(headers));
        }
        try {
            const url = buffer ? `${api}?${urlParams}` : api;
            const res = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: buffer ? buffer : urlParams.toString(),
                credentials: 'include'
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            if (!res.body) {
                throw new Error('No response body');
            }
            return new NextResponse(res.body, {
                headers: {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive'
                }
            });
        } catch (e) {
            throw e;
        }
    }

    getUserInfo(request: NextRequest): User | null {
        const userjson = request.cookies.get('user')?.value;
        if (userjson && userjson.length > 0) {
            return JSON.parse(userjson);
        }
        return null;
    }

    getToken(request: NextRequest): HttpToken {
        const userjson = request.cookies.get('user')?.value;
        let username = '';
        let utype = this.userType;
        if (userjson && userjson.length > 0) {
            const user = JSON.parse(userjson);
            username = user.username;
            utype = user.userType.toString();
        }
        return {
            username: username,
            utype: utype,
            token: request.cookies.get('token')?.value ?? ''
        }
    }

    getTokenByCookies = (cookies: ReadonlyRequestCookies): HttpToken => {
        const userjson = cookies.get('user')?.value;
        let username = '';
        let utype = this.userType;
        if (userjson && userjson.length > 0) {
            const user = JSON.parse(userjson);
            username = user.username;
            utype = user.userType.toString();
        }
        return {
            username: username,
            utype: utype,
            token: cookies.get('token')?.value ?? ''
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setToken(data: User & { token: string, extFields: Record<string, any> }, response: NextResponse) {
        const { id, name, username, nickname, sex, headImg, token, extFields, lastLoginTime, tokenExpired, deviceId, userType } = data;
        const loginUser: User = {
            id: id,
            name: name,
            username: username,
            nickname: nickname,
            sex: sex,
            headImg: headImg,
            lastLoginTime: lastLoginTime,
            tokenExpired: tokenExpired,
            deviceId: deviceId,
            userType: userType,
            status: 0,
            accountType: 0,
            enabled: false,
            userFrom: 1,
            needToReview: false,
            socketOnline: false,
            createTime: ""
        };
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: !this._isDebug,  // 在生产环境中启用Secure
            sameSite: 'strict',      // 防止 CSRF 攻击
            path: '/',               // Cookie 的路径
        });
        response.cookies.set('user', JSON.stringify(loginUser));
        return response;
    }

    cleanToken(response: NextResponse) {
        console.debug('clean token >>> ')
        response.cookies.set('token', '', {
            maxAge: -1, //设置为 -1表示立即过期
            httpOnly: true,
            path: '/',
        });
        response.cookies.set('user', '', {
            maxAge: -1, //设置为 -1表示立即过期
            httpOnly: true,
            path: '/',
        });
        response.cookies.delete('token');
        response.cookies.delete('user')
        return response;
    }
}