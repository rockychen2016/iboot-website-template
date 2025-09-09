
declare type ReviewType = 'product' | 'article' | 'photo' | 'video'

declare interface SubscribeUser{
    id:string,
    nickname:string,
    email:string,
}

declare interface Reviews{
    id:string,
    reviewType:ReviewType,
    entityNo:string,
    name:string,
    rating:number,
    message:string,
    createTime?:string
}

declare interface ContactUs{
    name:string,
    phone:string,
    email:string,
    subject:string,
    message:string
}