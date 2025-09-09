'use client'
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
    website,
    children
}: Readonly<{
    website: Website
    children: React.ReactNode
}>) {
    useEffect(() => {
        const numbers: CurWebsiteNumbers = {
            "websiteId": website.id,
            "websiteNo": website.websiteNo
        }
        localStorage.setItem(_CURRENT_WEBSITE_KEY, JSON.stringify(numbers));
    }, [])
    return (
        <CurWebsiteProvider.Provider value={website}>
            {children}
        </CurWebsiteProvider.Provider>
    )
}