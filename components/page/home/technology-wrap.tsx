'use client'
import { Image } from "@heroui/react";
import { useTranslations } from "use-intl";

export default function TechnologyWrap() {
    const t = useTranslations('Website.Page.Home.TechnologyWrap');
    return (
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {
                        t("title")
                    }
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                    {t('desc')}
                </p>
                <ul className="space-y-4">
                    {
                        t.rich('descList', {
                            li: (chunks) => <li className="flex items-start">
                                <svg className="h-6 w-6 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{chunks}</span>
                            </li>
                        })
                    }

                </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="rounded-2xl w-full h-96 flex items-center justify-center">
                    <Image isBlurred isZoomed src="/technology.jpg" alt="Premium Vaping" />
                </div>
            </div>
        </div>
    );
}