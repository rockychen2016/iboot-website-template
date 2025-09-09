declare type AttachmentType = 'image' | 'video' | 'audio' | 'file';
declare interface SysFile{
    fileName:string,
    firstName:string,
    extName:string,
    fileUrl:string,
    fileSize:number,
    createTime?:string,
    hostUrl?:string,
    fileHash:string,
}