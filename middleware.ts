import { getLocale } from "next-intl/server";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    console.log("Middleware URL >>> ", path)
    if (process.env.NODE_ENV != 'production') {
        console.debug('- ', request.method, '[', path, ']', '   -');
    }
    const locale = await getLocale();
    const response = NextResponse.next();
    response.headers.set('lang', locale);
    response.headers.set('path', path);
    const websiteId = request.cookies.get('NEXT_WEBSITE_ID')?.value;
    const websiteNo = request.cookies.get('NEXT_WEBSITE_NO')?.value;
    if(websiteId && websiteId.length > 0 && websiteNo && websiteNo.length > 0){
        console.log('Current websiteId, websiteNo >>> ', websiteId, ',', websiteNo);
        response.headers.set('webid', websiteId);
        response.headers.set('webno', websiteNo);
    }
    if (path.startsWith('/account/main')) {
        const token = request.cookies.get('token')?.value;
        if (!token || token.length == 0) {
            return NextResponse.redirect(new URL('/account/login', request.url));
        }
    } else if (path.startsWith("/static/")) {
        return NextResponse.redirect(new URL(`${process.env.BASE_URL}${path}`));
    }
    return response;
}

export const config = {
    matcher: [
        '/((?!api|trpc|_next|_vercel|.*\\..*).*)', //排除规则
        '/static/:path*'                           //这是例外静态资源转发
    ]
}