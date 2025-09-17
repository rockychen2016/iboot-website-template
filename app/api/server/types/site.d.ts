declare interface I18NWebSite{
    id:string,
    code:string,
    name:string,
    icon:string,
    websiteId:string,
    websiteNo:string,
}
declare interface Website{
    id:string,
    language:string,
    name:string,
    websiteNo:string,
    contactPhone?:string,
    contactEmail?:string,
    contactAddr?:string,
    scriptContent?:string,
    dueTime?:string,
    defaultSite:boolean,
    unavailable:boolean,
    agreement?:string,
    seoProps?:SeoProps
}

declare interface SeoProps{
    title?:string,
    keywords?:string,
    description?:string
}

declare interface WebChannel{
    id:string,
    channelType:string,
    channelNo:string,
    name:string,
    introduction?:string,
    thumbUrl?:string,
    thumbHash?:string,
    content?:string,
    level?:string,
    sortBy?:number,
    seoProps?:SeoProps
}

declare type CurWebsiteNumbers ={
    websiteId:string,
    websiteNo:string,
    language:string,
}