
declare type SortDirection = 'DESC' | 'ASC'
declare type PageInfo<T> = {
    pageNo: number,     //当前页号
    pageSize: number,   //每页行数
    total: number,      //总行数
    pageCount: number   //总页数
    content: Array<T>,  //数据行
    first: boolean,     //是否为第一页
    last: boolean       //是否为最后一页,
    isInit?: boolean    //是否已初始化过,
    sortBy?: string,
    sort?: SortDirection
}