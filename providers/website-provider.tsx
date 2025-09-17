'use client'
import { API } from "@/app/api/server/api";
import { iGet } from "@/utils/http";
import React from "react";
import { createContext, useContext, useEffect } from "react";
export type CurWebsite = Omit<Website, 'seoProps' | 'unavailable' | 'defaultSite'>

export const _CURRENT_WEBSITE_KEY = '_CURRENT_WEBSITE_KEY';

const curWebsite: CurWebsite = {
    id: '',
    name: '',
    language: '',
    websiteNo: ''
}

const CurWebsiteProvider = createContext<CurWebsite>(curWebsite);
export const useCurWebsiteContext = () => {
    return useContext(CurWebsiteProvider);
}
export default function CurrentWebsiteProvider({
    children,
    lang
}: Readonly<{
    children: React.ReactNode,
    lang: string
}>) {
    const [website, setWebsite] = React.useState<CurWebsite>(curWebsite);

    useEffect(() => {
        const loadCurrentWebsite = async () => {
            const res = await iGet<Website>(API[API.curWebsite], { heads: { "lang": lang } });
            if (res) {
                const lang = res.language.replaceAll('_', '-');
                const numbers: CurWebsiteNumbers = {
                    "websiteId": res.id,
                    "websiteNo": res.websiteNo,
                    "language": lang
                }
                localStorage.setItem(_CURRENT_WEBSITE_KEY, JSON.stringify(numbers));
                setWebsite({
                    ...res,
                    language: lang
                })
            }
        }
        if (lang != website.language) {
            loadCurrentWebsite();
        }
    }, [lang])
    return (
        <CurWebsiteProvider.Provider value={website}>
            {children}
        </CurWebsiteProvider.Provider>
    )
}