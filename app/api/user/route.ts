import { User } from "@/app/api/server/types/user";
import { getHttpOpts, HttpClient, ResultModel } from "@/utils/http";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    const userInfo = (new HttpClient(getHttpOpts(request))).getUserInfo(request);
    if (userInfo) {
        const result: ResultModel<User> = {
            code: 1,
            success: true,
            data:userInfo
        }
        return NextResponse.json(result);
    }
    const error: ResultModel<unknown> = {
        code: 409,
        success: false
    }
    return NextResponse.json(error);
}