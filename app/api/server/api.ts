export enum API {
    login,
    logout,
    register,
    logger,
    i18nList,
    curWebsite,
    getChannelListByNo,
    getChannelListByUri,
    getChannelById,
    getChannelByUrl,

    getProduct,
    searchProductForPage,
    searchProductForPageByGroup,
    searchProductByGroup,

    userSubscribe,
    contactUs,

    getReviewList,
    comment,

    getLinkGroupList,
    getFriendLinks,
    addLink,

    getNewsDetail,
    searchNewsForPage,
    searchNewsForPageByGroup,
    searchNewsByGroup
}
export const APIMAP: Record<string, string> = {
    "login"                      : "login",
    "logout"                     : "logout",
    "register"                   : "guest/register",
    "logger"                     : "guest/site/logger",
    "curWebsite"                 : "guest/site/currentWebSite",
    "i18nList"                   : "guest/site/i18nList",
    "getChannelListByNo"         : "guest/site/getChannelListByNo",
    "getChannelListByUri"        : "guest/site/getChannelListByUri",
    "getChannelById"             : "guest/site/getChannelById",
    "getChannelByUrl"            : "guest/site/getChannelByUrl",
    "getProduct"                 : "guest/site/getProduct",
    "searchProductForPage"       : "guest/site/searchProductForPage",
    "searchProductForPageByGroup": "guest/site/searchProductForPageByGroup",
    "searchProductByGroup"       : "guest/site/searchProductByGroup",

    "userSubscribe"              : "guest/site/userSubscribe",
    "comment"                    : "guest/site/comment",
    "contactUs"                  : "guest/site/contactUs",
    "getReviewList"              : "guest/site/getReviewList",

    "getLinkGroupList"           : "guest/site/getLinkGroupList",
    "getFriendLinks"             : "guest/site/getFriendLinks",
    "addLink"                    : "guest/site/addLink",

    "getNewsDetail"              : "guest/site/getNewsDetail",
    "searchNewsForPage"          : "guest/site/searchNewsForPage",
    "searchNewsForPageByGroup"   : "guest/site/searchNewsForPageByGroup",
    "searchNewsByGroup"          : "guest/site/searchNewsByGroup",

}