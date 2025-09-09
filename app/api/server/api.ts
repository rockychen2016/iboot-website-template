export enum API {
    login,
    logout,
    curWebsite,
    i18nList,
    getChannelList,
    getChannel,
    getProduct,
    searchProductForPage,
    searchProductForPageByGroup,
    searchProductByGroup,
    userSubscribe,
    comment,
    contactUs,
    getReviewList
}
export const APIMAP: Record<string, string> = {
    "login": "login",
    "logout": "logout",
    "register": "guest/register",
    "curWebsite": "guest/site/currentWebSite",
    "i18nList": "guest/site/i18nList",
    "getChannelList": "guest/site/getChannelList",
    "getChannel": "guest/site/getChannel",
    "getProduct": "guest/site/getProduct",
    "searchProductForPage": "guest/site/searchProductForPage",
    "searchProductForPageByGroup": "guest/site/searchProductForPageByGroup",
    "searchProductByGroup": "guest/site/searchProductByGroup",

    "userSubscribe": "guest/site/userSubscribe",
    "comment": "guest/site/comment",
    "contactUs": "guest/site/contactUs",
    "getReviewList": "guest/site/getReviewList",
}