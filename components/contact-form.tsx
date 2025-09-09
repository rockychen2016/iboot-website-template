'use client'
import { UserContactUs } from "@/app/api/server/client";
import { useAlertMessage } from "@/providers/alert-modal-provider";
import { showAlert } from "@/utils/alert-utils";
import { Button, Form, Input, Textarea } from "@heroui/react";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

export default function ContactForm() {
    const t = useTranslations('Website.InteractionTips.ContactForm');
    const b = useTranslations('Components.Button')

    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const iAlert = useAlertMessage();


    const onSubmitHandle = useCallback(async (e: UIFormEvent) => {
        e.preventDefault();
        const data: UIFormEntities = Object.fromEntries(new FormData(e.currentTarget));
        setIsSubmitting(true);
        const res = await UserContactUs(data);
        setIsSubmitting(false);
        if (res) {
            setSubmitSuccess(true);
            return;
        }
        showAlert(iAlert, t('error'), 'error');

    }, [])


    return (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            {submitSuccess && (
                <div className="bg-green-900 text-green-200 p-4 rounded-lg mb-6">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{t('success')}</span>
                    </div>
                </div>
            )}

            <Form className="gap-5" onSubmit={onSubmitHandle} autoComplete="off">
                <Input
                    required
                    name="name"
                    label={t('lab_name')}
                    labelPlacement="outside"
                    maxLength={20}
                />
                <Input
                    required
                    type="email"
                    name="email"
                    label={t('lab_email')}
                    labelPlacement="outside"
                    maxLength={50}
                />
                <Input
                    required
                    name="subject"
                    label={t('lab_subject')}
                    labelPlacement="outside"
                    maxLength={50}
                />
                <Textarea
                    required
                    name="message"
                    label={t('lab_message')}
                    maxLength={200}
                />
                <div className="py-4 w-full flex justify-center items-center">
                    <Button type="submit" isLoading={isSubmitting} size="lg" radius="full" color="secondary">
                        {b('btn_submit')}
                    </Button>
                </div>
            </Form>
        </div>
    );
}