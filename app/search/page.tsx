import { getTranslations } from "next-intl/server";
import { AiOutlineSearch } from "react-icons/ai";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const t = await getTranslations('Website.Page.Search');
    const params = await searchParams;
    const keyword = params['keyword'];

    return (
        <div className="mx-auto px-4 py-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 py-12 text-center">{t('title')}</h1>
            {/* 产品列表 */}
            <div className="flex gap-2 justify-center items-center">
                <AiOutlineSearch />
                <span>{keyword ?? '-'}</span>
            </div>
            <div className="p-6 flex justify-center items-center">
                {t('notthing')}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            </div>
        </div>
    );
}