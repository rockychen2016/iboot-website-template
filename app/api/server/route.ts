import { NextRequest } from "next/server";
import { startRequest } from "./server";

export async function GET(request: NextRequest) {
    return await startRequest('GET', request);
}

export async function POST(request: NextRequest) {
    return await startRequest('POST',  request);
}