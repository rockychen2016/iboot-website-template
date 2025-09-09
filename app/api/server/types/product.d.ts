declare interface Owner{
    id:string,
    websiteNo:string,
    entityNo:string,
    channelNoLevel:string,
    sortBy:number,
    visible:boolean
    createTime?:string
}
declare interface ProductContent extends Owner{
    proName:string,
    proIntroduction?:string,
    proSpec?:string,
    proFeatures?:string,
    proPrice:number,
    thumbUrl?:string,
    description?:string,
    attachmentList?:Array<ProContentAttachment>,
    seoProps?:SeoProps
}

declare interface ProContentAttachment extends SysFile{
    attachmentType:AttachmentType
}
