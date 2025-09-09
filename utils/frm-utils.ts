
const phoneReg: RegExp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
const emailReg: RegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
export const validateLoginUserName = (value: string) => {
    const adminReg: RegExp = /^(admin)$/;
    return !phoneReg.test(value) && !emailReg.test(value) && !adminReg.test(value);
}
export const validatePhoneAndEmail = (value:string) =>{
    return !phoneReg.test(value) && !emailReg.test(value);
}
