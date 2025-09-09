import { iGet, post } from "@/utils/http"
import { API } from "./api"

export const UserSubscribe = async (model: SubscribeUser) => {
    const res = await post(API[API.userSubscribe], { data: model });
    return res.success;
}

export const UserComment = async (model: Reviews | UIFormEntities) => {
    const res = await post(API[API.comment], { data: model });
    return res.success;
}

export const UserContactUs = async (model: ContactUs | UIFormEntities) => {
    const res = await post(API[API.contactUs], { data: model });
    return res.success;
}

export const GetReviewList = async (contentNo: string, count?: number) => {
    return await iGet<Array<Reviews>>(API[API.getReviewList], {data:{
        "entityNo":contentNo,
        "rowCount":count?.toString()??''
    }});
    
}