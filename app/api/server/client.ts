/**
 * use client 客户端API
 */
import { iGet, post } from "@/utils/http"
import { API } from "./api"

/**
 * 订阅
 * @param model 
 * @returns 
 */
export const UserSubscribe = async (model: SubscribeUser) => {
    const res = await post(API[API.userSubscribe], { data: model });
    return res.success;
}

/**
 * 评论
 * @param model 
 * @returns 
 */
export const UserComment = async (model: Reviews | UIFormEntities) => {
    const res = await post(API[API.comment], { data: model });
    return res.success;
}

/**
 * 联系留言
 * @param model 
 * @returns 
 */
export const UserContactUs = async (model: ContactUs | UIFormEntities) => {
    const res = await post(API[API.contactUs], { data: model });
    return res.success;
}

/**
 * 获取指定数量的评论数据
 * @param entityNo 指定内容(可为空,为空时不限内容)
 * @param count 评论记录数
 * @returns 
 */
export const GetReviewList = async (entityNo?: string, count: number = 3) => {
    return await iGet<Array<Reviews>>(API[API.getReviewList], { data: { entityNo: entityNo??'', rowCount: count.toString() } });
}