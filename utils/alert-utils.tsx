import { IAlertMessageBox, useAlertMessage } from "@/providers/alert-modal-provider";
import { AiFillInfoCircle, AiOutlineFrown, AiOutlineInfoCircle } from "react-icons/ai";

export type AlertType = 'info' | 'success' | 'error';

const size = 32;
export const infoAlert = (alert: IAlertMessageBox, msg: string, title?: string, onClose?: () => void) => {
    alert.open({
        "message": msg,
        "title": title,
        "onClose": onClose,
        "color": "primary",
        "icon": <AiFillInfoCircle size={size} />
    });
}

export const successAlert = (alert: IAlertMessageBox, msg: string, title?: string, onClose?: () => void) => {
    alert.open({
        "message": msg,
        "title": title,
        "onClose": onClose,
        "color": "success",
        "icon": <AiOutlineInfoCircle size={size} />
    });
}

export const failAlert = (alert: IAlertMessageBox, msg: string, title?: string, onClose?: () => void) => {
    alert.open({
        "message": msg,
        "title": title,
        "onClose": onClose,
        "color": "danger",
        "icon": <AiOutlineFrown  size={size} />
    });
}

export const showAlert = (iAlert:IAlertMessageBox,msg:string, type?:AlertType)=>{
    if(!type){
        infoAlert(iAlert, msg);
        return;
    }
    switch(type){
        case "info":
            infoAlert(iAlert, msg);
            return;
        case "success":
            successAlert(iAlert, msg);
            return;
        case "error":
            failAlert(iAlert, msg);
    }
}
