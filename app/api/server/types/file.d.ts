declare type AttachmentType = 'image' | 'video' | 'audio' | 'file';
declare interface SysFile{
    id:string,
    fileName:string,
    firstName:string,
    extName:string,
    fileUrl:string,
    fileSize:number,
    createTime?:string,
    hostUrl?:string,
    fileHash:string,
}
declare type ImageFile = Pick<SysFile, 'id' | 'fileName' | 'fileUrl'>