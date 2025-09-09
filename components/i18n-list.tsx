'use client'
import { setUserLocale } from "@/i18n/service";
import { Image } from "@heroui/react";
import { Select, SelectItem } from "@heroui/select";
import { SharedSelection } from "@heroui/system";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function I18NList({
    lang,
    data
}: Readonly<{
    lang: string,
    data: Array<I18NWebSite>
}>) {
    const router = useRouter();
    const [curI18N, setCurI18N] = useState<I18NWebSite>();
    const onSelectionChange = useCallback(async (key: SharedSelection) => {
        if (!key.currentKey || key.currentKey.length === 0) {
            return;
        }
        const i18n = data.find(item => item.code === key.currentKey);
        if (i18n) {
            setCurI18N({ ...i18n })
            await setUserLocale(key.currentKey as I18N, i18n.websiteId, i18n.websiteNo);
            router.refresh()
        }
    }, [data])

    const LangIcon = useMemo(() => {
        if (curI18N) {
            return <Image radius="none" width={32} src={curI18N.icon} alt="i18n icon" />
        }
        return null;
    }, [curI18N])


    useEffect(() => {
        const initI18N = async () => {
            if (data.length > 0) {
                const i18nWebsite = data.find(item => item.code === lang);
                if (i18nWebsite) {
                    setCurI18N({ ...i18nWebsite })
                } else {
                    const defaultI18N = data[0];
                    setCurI18N({ ...defaultI18N })
                    await setUserLocale(defaultI18N.code as I18N, defaultI18N.websiteId, defaultI18N.websiteNo);
                }
            }
        }
        initI18N();

    }, [data, lang])

    return (

            <Select
                radius="md"
                label=""
                aria-label="i18n list"
                items={data}
                selectionMode="single"
                startContent={LangIcon}
                defaultSelectedKeys={[curI18N?.code ?? '']}
                selectedKeys={[curI18N?.code ?? '']}
                onSelectionChange={onSelectionChange}
            >
                {
                    (item => <SelectItem key={item.code}
                        startContent={<Image radius="none" sizes="sm" width={28} src={item.icon} alt="lang" />}>
                        {item.name}
                    </SelectItem>)
                }
            </Select>

    );
}