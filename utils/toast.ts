import { addToast } from "@heroui/toast";

const typeMap: Record<string, 'success' | 'danger' | 'primary' | 'warning'> = {
    "success": "success",
    "error": "danger",
    "info": "primary",
    "warning": "warning"
}

export const Toast = (msg?: string, type?: 'success' | 'error' | 'warning' | 'info', onClose?: () => void) => {
    addToast({
        title: msg ?? 'Unknown error!',
        color: type ? typeMap[type] : typeMap["info"],
        onClose: onClose,
        timeout: 3000,
    });
    if (onClose && typeof onClose === 'function') {
        setTimeout(onClose, 3000)
    }
}

export const SuccessToast = (msg?: string, onClose?: () => void) => {
    Toast(msg??'Success!', 'success', onClose);
}

export const ErrorToast = (msg?: string, onClose?: () => void) => {
    Toast(msg ?? 'Unknown error!', 'error', onClose);
}