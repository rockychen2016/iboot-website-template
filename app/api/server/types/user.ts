
export const ACCOUNT_TYPE = {
    GENERAL : 0,
    PHONE : 1,
    EMAIL : 2
} as const

export const USER_TYPE={
    TYPE_MGT : 0,
    TYPE_C : 1,
    TYPE_B : 2
} as const;

export const USER_FORM = {
    FROM_WEB : 1,
    FROM_PC : 2,
    FROM_WX_MINI_PRO : 3,
    FROM_WX_PLU : 4,
    FROM_WX_E : 5,
    FROM_APP : 6,
    FROM_DEVICE : 7
} as const

export const USER_SEX ={
    unknown:0,
    male:1,
    female:2,
} as const

export type ACCOUNT_TYPE = typeof ACCOUNT_TYPE[keyof typeof ACCOUNT_TYPE];
export type USER_TYPE = typeof USER_TYPE[keyof typeof USER_TYPE];
export type USER_FORM = typeof USER_FORM[keyof typeof USER_FORM];
export type USER_SEX = typeof USER_SEX[keyof typeof USER_SEX];


export interface User {
    id: string,
    status: 0 | 1
    name: string,
    sex: USER_SEX,
    username: string,
    phone?: string,
    email?: string,
    accountType: ACCOUNT_TYPE,
    birthday?: string,
    headImg?: string,
    nickname?: string,
    motto?: string,
    enabled: boolean,
    userType: USER_TYPE,
    userFrom: USER_FORM,
    needToReview: boolean,
    socketOnline: boolean,
    unionId?: string,
    openId?: string,
    wxPid?: string,
    createTime: string,
    lastLoginTime?: string,
    lastLogoutTime?: string,
    latitude?: number,
    longitude?: number,
    deviceId?: string,
    tokenExpired?:number,
}


export interface WxPlatform{
    id:number,
    name:string,
    appId:string,
    type:string,
    enabled:boolean,
    valid:boolean,
    usePhone:boolean,
    openPlatForm:boolean,
    usePassword:boolean,
    secret?:string,
    token?:string,
    aesKey?:string,
}

export type WxUserFrom = 3 | 4 | 5;


