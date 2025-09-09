'use client'
import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MessageModalOpts } from "./alert-modal-provider";

interface ConfirmMessageOpts extends MessageModalOpts {
    onConfirm: () => Promise<boolean>,
    onSuccess?: () => void,
    onCancel?: () => void
}

type IConfirmMessageBox = {
    open: (options: ConfirmMessageOpts) => void;
}


const defaultOptions: ConfirmMessageOpts = {
    title: '',
    message: '',
    onConfirm: async () => true
}
const defaultValue: IConfirmMessageBox = {
    open(options) {
        console.log(JSON.stringify(options))
    },
}

const ConfirmMessageBox = createContext<IConfirmMessageBox>(defaultValue);
export const useConfirmModal = (): IConfirmMessageBox => {
    return useContext(ConfirmMessageBox);
}
export const ConfirmBoxProvider = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    const [options, setOptions] = useState<ConfirmMessageOpts>({ ...defaultOptions })
    const [confirm, setConfirm] = useState<IConfirmMessageBox>({ ...defaultValue });
    const [show, setShow] = useState(false);
    const handleClose = useCallback(() => {
        setOptions({ ...defaultOptions });
        setShow(false);
    }, [])
    useEffect(() => {
        setConfirm({
            open: (options) => {
                setOptions({ ...options });
                setShow(true);
            }
        })
    }, [])
    return (
        <>
            <ConfirmMessageBox.Provider value={confirm}>
                {children}
            </ConfirmMessageBox.Provider>
            <ConfirmModal
                show={show}
                title={options.title}
                message={options.message}
                confirmFn={options.onConfirm}
                cancelFn={options.onCancel}
                onCloseAfter={handleClose}
                onSuccess={options.onSuccess}
            />
        </>
    );
}

const ConfirmModal = ({
    show,
    title,
    message,
    confirmFn,
    cancelFn,
    onCloseAfter,
    onSuccess
}: Readonly<{
    show: boolean,
    title?: string,
    message: string,
    confirmFn: () => Promise<boolean>,
    cancelFn?: () => void,
    onCloseAfter: () => void,
    onSuccess?: () => void
}>) => {
    const t = useTranslations('Components.MessageBox');
    const [loading, setLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure({
        onClose() {
            onCloseAfter();
        },
    });

    const handleConfirm = useCallback(async () => {
        if (typeof confirmFn === 'function') {
            setLoading(true);
            const res = await confirmFn();
            setLoading(false);
            if (res) {
                onClose();
                if (onSuccess && typeof onSuccess === 'function') {
                    onSuccess();
                }
            }
            return;
        }
        onClose();
    }, [confirmFn, onClose, onSuccess]);

    const handleCancel = useCallback(() => {
        onClose();
        if (cancelFn && typeof cancelFn === 'function') {
            cancelFn();
        }
    }, [cancelFn, onClose])
    useEffect(() => {
        if (show) {
            onOpen();
        } else {
            onClose();
        }
    }, [show, onOpen, onClose])
    return (
        <Modal isOpen={isOpen}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">{(!title || title.length == 0) ? t('default_title') : title}</ModalHeader>
                <ModalBody className="flex flex-row justify-start items-center gap-2">
                    <p className="flex flex-col text-primary">
                        <AiOutlineQuestionCircle size={32} />
                    </p>
                    <p className="flex flex-col flex-1">{message}</p>
                </ModalBody>
                <ModalFooter className="flex gap-2">
                    <Button isLoading={loading} color='primary' onPress={handleConfirm}>{t('btn_confirm')}</Button>
                    <Button color='default' onPress={handleCancel}>{t('btn_cancel')}</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}



