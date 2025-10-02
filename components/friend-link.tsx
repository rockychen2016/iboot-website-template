'use client';
import { API } from "@/app/api/server/api";
import { useCurWebsiteContext } from "@/providers/website-provider";
import { iGet } from "@/utils/http";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function FriendLink({
    count = 10
}: Readonly<{
    count?: number
}>) {
    const t = useTranslations('Website.Footer');
    const curWebsite = useCurWebsiteContext();
    const [data, setData] = useState<Array<FriendLink>>([]);

    useEffect(() => {
        const loadLinks = async (websiteId: string) => {
            const res = await iGet<Array<FriendLink>>(API[API.getFriendLinks], { data: { id: websiteId, count: count.toString() } });
            if (res) {
                setData([...res ?? []])
            }
        }
        if (curWebsite && curWebsite.id && curWebsite.id.length > 0) {
            loadLinks(curWebsite.id);
        }
    }, [curWebsite, count])

    return (
        data.length > 0 ? <div className="pt-3">
            <p className="flex justify-center items-center gap-2 text-xs">
                {
                    (data).map(item => <a href={item.url} title={item.description ?? '-'} target="_blank">{item.name}</a>)
                }
                <a href="/link" target="_blank">{t('friendLink')}</a>
            </p>
        </div> : null
    );

}