'use client'
import { GetReviewList, UserComment } from "@/app/api/server/client";
import { useAlertMessage } from "@/providers/alert-modal-provider";
import { showAlert } from "@/utils/alert-utils";
import { iGet } from "@/utils/http";
import { Alert, Button, Form, Input, Select, SelectItem, Textarea } from "@heroui/react";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useTranslations } from "use-intl";

{/* 用户评论 */ }

export default function ProductUserReview({
    entityNo
}: Readonly<{
    entityNo: string
}>) {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
            <Reviews entityNo={entityNo} />
            <ReviewsForm entityNo={entityNo} />
        </div>
    );
}


/**
 * 评论
 * @returns 
 */

function Reviews({
    entityNo
}: Readonly<{
    entityNo: string
}>) {

    const [data, setData] = useState<Array<Reviews>>([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await GetReviewList(entityNo, 5);
            setData([...res ?? []])
        }
        if (entityNo && entityNo.length > 0) {
            loadData();
        }
    }, [entityNo])

    return (

        <div className="space-y-8 mb-8">
            {data.map((review) => (
                <div key={review.id} className="bg-gray-400 dark:bg-gray-800 rounded-2xl p-8">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold">{review.name}</h3>
                        <span className="text-gray-800 dark:text-gray-400 text-sm">{review.createTime}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-300">{review.message}</p>
                </div>
            ))}
        </div>
    );
}

{/* 评论表单 */ }
function ReviewsForm({
    entityNo
}: Readonly<{
    entityNo: string
}>) {
    const t = useTranslations('Website.InteractionTips.ReviewsForm')
    const b = useTranslations('Components.Button')
    const [stars] = useState<{ value: string, label: string }[]>([
        {
            value: '1',
            label: '1 star'
        },
        {
            value: '2',
            label: '2 stars'
        },
        {
            value: '3',
            label: '3 stars'
        },
        {
            value: '4',
            label: '4 stars'
        },
        {
            value: '5',
            label: '5 stars'
        },
    ])
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const iAlert = useAlertMessage();


    const onSubmitHandle = useCallback(async (e: UIFormEvent) => {
        e.preventDefault();
        const data: UIFormEntities = Object.fromEntries(new FormData(e.currentTarget));
        setIsSubmitting(true);
        const res = await UserComment(data);
        setIsSubmitting(false);
        if (res) {
            setSubmitSuccess(true);
            return;
        }
        showAlert(iAlert, t('error'), 'error');

    }, [])

    return (
        <div className="bg-gray-300 dark:bg-gray-800 rounded-2xl flex flex-col gap-6 p-8 mb-12">
            <h3 className="text-xl font-bold">{t('title')}</h3>
            {
                submitSuccess ? <Alert color="success" title={t('success')} /> : null 
            }
            <Form className="gap-3" onSubmit={onSubmitHandle} autoComplete="off">
                <Input type="hidden" name="reviewType" value="product" />
                <Input type="hidden" name="entityNo" value={entityNo} />
                <Input
                    required
                    name="name"
                    label={t('frmNameLab')}
                    placeholder={t('frmNameHold')}
                    labelPlacement="outside"
                />
                <Select
                    name="rating"
                    label={t('frmRatingLab')}
                    labelPlacement="outside"
                    defaultSelectedKeys={'5'}
                    selectionMode="single"
                >
                    {
                        stars.map(item => <SelectItem key={item.value} textValue={item.label}>{item.label}</SelectItem>)
                    }

                </Select>
                <Textarea
                    required
                    name="message"
                    label={t('frmReviewLab')}
                    placeholder={t('frmReviewHold')}
                    labelPlacement="outside"
                />
                <div className="w-full py-4 flex justify-center">
                    <Button isLoading={isSubmitting} type="submit" startContent={<AiOutlineSend />} color="secondary">{b('btn_submit')}</Button>
                </div>
            </Form>
        </div>
    );
}