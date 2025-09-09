import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { useTranslations } from "next-intl";
import React, { useCallback, useContext, useEffect } from "react";
import { createContext } from "react";
export interface MessageModalOpts {
    title?: string,
    message: string,
}

interface AlertMessageOpts extends MessageModalOpts {
    color?:"primary" | "default" | "secondary" | "success" | "warning" | "danger",
    icon?:React.ReactNode,
    onClose?:()=>void
}

export type IAlertMessageBox = {
    open:(options:AlertMessageOpts)=>void
}

const defaultOptions: AlertMessageOpts = {
    message: '',
}
const defaultValue:IAlertMessageBox = {
    open: () => { }
}
const AlertModalMessage = createContext<IAlertMessageBox>(defaultValue);
export const useAlertMessage = ():IAlertMessageBox => {
    return useContext(AlertModalMessage)
}
export default function AlertModalProvider({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const [alert, setAlert] = React.useState(defaultValue);
    const [options, setOptions] = React.useState(defaultOptions);
    const [show, setShow] = React.useState(false);
    const handleClose = useCallback(()=>{
        setOptions({...defaultOptions});
        setShow(false);
    },[])
    useEffect(()=>{
        setAlert({
            open:(opts)=>{
                setOptions({...opts});
                setShow(true);
            }
        })
    },[])
    return (
        <>
            <AlertModalMessage.Provider value={alert}>
                {children}
            </AlertModalMessage.Provider>
            <AlertModal show={show} options={options} onCloseAfter={handleClose} />
        </>
    )
}

const AlertModal = ({show, options , onCloseAfter}: Readonly<{show:boolean, options: AlertMessageOpts, onCloseAfter:()=>void }>) => {
    const t = useTranslations('Components.MessageBox');
    const { isOpen, onOpen, onClose } = useDisclosure({
        onClose() {
            onCloseAfter();
            if (options.onClose && typeof options.onClose === 'function') {
                options.onClose();
            }
        },
    });

    useEffect(() => {
        if(show){
            onOpen();
        }else{
            onClose();
        }
    }, [show, onClose, onOpen])

    return (
        <Modal isOpen={isOpen}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">{(options.title && options.title.length > 0) ? options.title : t('default_title')}</ModalHeader>
                <ModalBody className="flex flex-row justify-start items-center gap-2">
                    {(options.icon) ? (<p className={`flex flex-col text-${options.color}`}>{options.icon}</p>) : ''}
                    <p className="flex flex-col flex-1 pt-2">{options.message}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color={options.color ?? 'primary'} onPress={onClose}>{t('btn_confirm')}</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}