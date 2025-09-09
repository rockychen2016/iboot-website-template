

export const dateFormat = (dt: Date, fmt: string) => {
    const o:Record<string, number> = {
        "M+": dt.getMonth() + 1, //月份
        "d+": dt.getDate(), //日
        "h+": dt.getHours(), //小时
        "m+": dt.getMinutes(), //分
        "s+": dt.getSeconds(), //秒
        "q+": Math.floor((dt.getMonth() + 3) / 3), //季度
        S: dt.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt)){
        const regx = new RegExp(/(y+)/);
        const value = regx.exec(fmt);
        let len = 0;
        if(value && value.length > 0){
            len = value[0].length;
        }
        fmt = fmt.replace(/(y+)/, dt.getFullYear() + "").substring(4 - len);
    }

    for (const k in o){
        const s:string = "(" + k + ")";
        const regx = new RegExp(s);
        if(regx.test(fmt)){
            const value = regx.exec(fmt);
            let len = 0;
            if(value && value.length > 0){
                len = value[0].length;
            }
            fmt = fmt.replace(regx, len == 1 ? o[k].toString() : ("00" + o[k]).substring(o[k].toString().length))
        }
    }
    return fmt;
}



export const dateTimeAdd = (dt:Date, part:'y' | 'm' | 'd' | 'h' | 'n' | 's', value:number):Date=>{
    value *= 1;
    if (isNaN(value)) {
      value = 0;
    }
    switch (part) {
      case "y":
        dt.setFullYear(dt.getFullYear() + value);
        break;
      case "m":
        dt.setMonth(dt.getMonth() + value);
        break;
      case "d":
        dt.setDate(dt.getDate() + value);
        break;
      case "h":
        dt.setHours(dt.getHours() + value);
        break;
      case "n":
        dt.setMinutes(dt.getMinutes() + value);
        break;
      case "s":
        dt.setSeconds(dt.getSeconds() + value);
        break;
      default:
    }
    return dt;
}