'use client'
import { useCurWebsiteContext } from "@/providers/website-provider"
import { useTranslations } from "next-intl";
import Share from "./share";
import { Image } from "@heroui/react";

export default function FooterContact() {
    const t = useTranslations('Website.Footer.BottomNavbar');
    const curWebsite = useCurWebsiteContext();
    return (
        <>
            <h4 className="text-lg font-bold mb-4">{t('Contact')}</h4>
            <ul className="space-y-2">
                <li className="flex items-start">
                    <span style={{
                        width: 32
                    }}>
                        <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </span>
                    <span>
                        {
                            curWebsite.contactAddr
                        }
                    </span>
                </li>
                <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span>{curWebsite.contactPhone}</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>{curWebsite.contactEmail}</span>
                </li>
            </ul>
            {
                curWebsite.contactQrCode && curWebsite.contactQrCode.length > 0 ? 
                <div className="flex flex-col gap-2 pt-3 pl-1">
                    <p className="text-xs">{t('ContactQr')}</p>
                    <Image src={curWebsite.contactQrCode} alt="contact us qrcode" width={100} height={100} radius="none" />
                </div>:null
            }
            <div className="flex space-x-4 pt-5">
                <Share />
            </div>
        </>
    )
}