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
    contactQrCode?:string,
    scriptContent?:string,
    dueTime?:string,
    defaultSite:boolean,
    unavailable:boolean,
    agreement?:string,
    seoProps?:SeoProps,
    icpNumber?:string,
    description?:string,
    qrcodeUrl?:string,
    wxQrcodeUrl?:string
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
    subTitle?:string,
    tagLabel?:string,
    introduction?:string,
    thumbUrl?:string,
    thumbHash?:string,
    showDetail?:boolean,
    jumpUrl?:string,
    jumpText?:string,
    content?:string,
    level?:string,
    sortBy?:number,
    seoProps?:SeoProps,
    children?:Array<WebChannel>,
    banners?:Array<ImageFile>
}

declare type CurWebsiteNumbers ={
    websiteId:string,
    websiteNo:string,
    language:string,
}

declare interface FriendLink{
    id:string,
    name:string,
    description?:string,
    url:string
}

declare interface ContentAttachment extends SysFile{
    attachmentType:AttachmentType
}

declare interface Owner{
    id:string,
    websiteNo:string,
    entityNo:string,
    channelNoLevel:string,
    sortBy:number,
    visible:boolean
    createTime?:string
    seoProps?:SeoProps
    thumbUrl?:string,
}
declare interface ProductContent extends Owner{
    proName:string,
    proIntroduction?:string,
    proSpec?:string,
    proFeatures?:string,
    proPrice:number,
    description?:string,
    attachmentList?:Array<ContentAttachment>,
}

declare interface NewsContent extends Owner{
    title:string,
    shortDesc?:string,
    keywords?:string,
    author?:string,
    source?:string,
    jumpUrl?:string,
    attachmentList?:Array<ContentAttachment>,
    details?:{
        introduction?:string,
        description?:string,
    }
}





