import { getLocale } from "next-intl/server";
import { NextRequest, NextResponse } from "next/server";
import { Logger, SetRequestHeader } from "./app/api/server/server";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    if (path.startsWith('/account/main')) {
        const token = request.cookies.get('token')?.value;
        if (!token || token.length == 0) {
            return NextResponse.redirect(new URL('/account/login', request.url));
        }
    } else if (path.startsWith("/static/")) {
        return NextResponse.redirect(new URL(`${process.env.BASE_URL}${path}`));
    }
    // 尝试设置请求头
    const response =  NextResponse.next();
    await SetRequestHeader(request, response);
    const locale = await getLocale();
    Logger(path, locale, request);
    return response;
}

export const config = {
    matcher: [
        '/((?!api|trpc|_next|_vercel|.*\\..*).*)', //排除规则
        '/static/:path*'                           //这是例外静态资源转发
    ]
}