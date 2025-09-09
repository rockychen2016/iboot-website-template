'use client'
import Share from "@/components/share"
import { useCurWebsiteContext } from "@/providers/website-provider";
import { useTranslations } from "next-intl"


export default function ContactInfo() {
    //const t = async (key:string)=>await GetI18n("Website.Page.Contact", key)
    const t = useTranslations('Website.Page.Contact');
    const website = useCurWebsiteContext();
    return (
        <>
            <h2 className="text-2xl font-bold mb-6">{t('title')}</h2>
            <p className="mb-8">
                {t('desc')}
            </p>

            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="w-12 min-w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">{t('addr')}</h3>
                        <p>{website.contactAddr}</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">{t('phone')}</h3>
                        <p>{website.contactPhone}</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">{t('email')}</h3>
                        <p>{website.contactEmail}</p>
                    </div>
                </div>

                {/* <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">Working Hours</h3>
                        <p>Monday - Friday: 9AM - 6PM</p>
                        <p>Saturday: 10AM - 4PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div> */}
            </div>

            <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                    <Share />
                </div>
            </div>
        </>
    )
}