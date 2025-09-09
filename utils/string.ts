import CryptoJS from 'crypto-js';

export const strFormat = (str: string, ...args: string[]): string => {
  let result = str;
  if (args.length > 0) {
    for (let i = 0; i < args.length; i++) {
      if (args[i] != undefined) {
        const reg = new RegExp("({)" + i + "(})", "g");
        result = result.replace(reg, args[i]);
      }
    }
  }
  return result;
};

export const strTrim = function (str?: string) {
  if (str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }
  return "";
};
export const strLTrim = (str?: string) => {
  if (str) return str.replace(/(^\s*)/g, "");
  return "";
};
export const strRTrim = function (str?: string) {
  if (str) return str.replace(/(\s*$)/g, "");
  return "";
};
/**
 * 生成指定长度的随机串
 * @param {Object} len
 */
export const randomString = (len: number) => {
  const l = len || 32;
  const $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  const maxPos = $chars.length;
  let pwd = "";
  for (let i = 0; i < l; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

/**
 * 生成指定长度的uuid
 * @param {Object} len
 * @param {Object} radix 2,10,16进制
 */
export const uuidStr = (len: number, radix?: number) => {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const uuid: Array<string> = []
  let i: number;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;

    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join("");
};


export const cleanHtml = (str?: string) => {
  const regex = /(<([^>]+)>)/gi;
  if (!str || str.length === 0) {
    return "";
  }
  return str.replace(regex, "")
    .replace(/\s/g, "")
    .replace(/&nbsp;/g, "");
};

export const simpleMarkdownToText = (markdown?: string) => {
  if (!markdown || markdown.length === 0) {
    return '';
  }
  return markdown
    // 移除标题
    .replace(/^#+\s+/gm, '')
    // 移除代码块
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    // 移除图片和链接
    .replace(/!\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    // 移除粗体和斜体
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    // 移除列表标记
    .replace(/^\s*[\*\-+]\s+/gm, '')
    // 移除引用标记
    .replace(/^\s*>\s+/gm, '')
    // 合并多个空行
    .replace(/\n\s*\n/g, '\n\n')
    .trim();
}

export const substring = (str: string, len: number) => {
  return str.length > len ? (str.substring(0, len) + '..') : str;
}

export const decrypt = (data: string, apikey: string) => {
  const key = CryptoJS.enc.Utf8.parse(apikey);
  return CryptoJS.AES.decrypt(data, key, {
    mode: CryptoJS.mode.ECB,
  }).toString(CryptoJS.enc.Utf8);
}


export const urlParamToJson = (urlQueryParams: string, exclude?: string[]): Record<string, string> => {
  const result: Record<string, string> = {};
  const strs = urlQueryParams.split("&");
  strs.forEach((item) => {
    const arr = item.split("=");
    if (arr[1]) {
      if (!exclude || exclude.indexOf(arr[0]) == -1) {
        result[arr[0]] = arr[1];
      }
    }
  });
  return result;
};

export const urlDecode = (value: string | null | undefined): string => {
  if (value == null || value == "" || value.length == 0) {
    return "";
  }
  return (
    encodeURIComponent(value)
      // .replace(/%20/g, '+')
      // .replace(/%2B/g, '\\+')
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      .replace(/\'/g, "%27")
      .replace(/\!/g, "%21")
      .replace(/\~/g, "%7E")
  );
};

/**
 * 首字符大写
 * @param str 
 * @returns 
 */
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

