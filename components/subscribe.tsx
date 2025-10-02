'use client'
import { UserSubscribe } from "@/app/api/server/client";
import { useAlertMessage } from "@/providers/alert-modal-provider";
import { showAlert } from "@/utils/alert-utils";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

export default function Subscribe() {
    const t = useTranslations('Components.Subscribe');
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [email, setEmail] = useState<string>('');
    const iAlert = useAlertMessage();

    const onSubmit = useCallback(async () => {
        if (email.length === 0) {
            showAlert(iAlert, t('enterError'), 'error');
            return;
        }
        const model: SubscribeUser = {
            id: '',
            email: email,
            nickname: ''
        }
        setIsSubmiting(true)
        const res = await UserSubscribe(model);
        setIsSubmiting(false);
        if (res) {
            setEmail('');
            showAlert(iAlert, t('submitSuccess'),'success');
            return;
        }
        showAlert(iAlert, t('submitFail'),'error')
    }, [email, iAlert, t])

    return (
        <div className="dark:bg-gradient-to-r from-purple-700 to-indigo-800 rounded-3xl py-10 px-8 text-center">
            <h2 className="text-3xl md:text-3xl font-bold mb-6">
                {
                    t('title')
                }
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-200 mb-10 max-w-3xl mx-auto">
                {
                    t('desc')
                }
            </p>
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
                <Input size="lg" color="secondary" type="email" placeholder={t('inputPaceHold')} value={email} onValueChange={setEmail} />
                <Button  isLoading={isSubmiting}  size="lg" radius="full" color="secondary" onPress={onSubmit}>{t('btnSubmit')}</Button>
            </div>
        </div>
    );
}