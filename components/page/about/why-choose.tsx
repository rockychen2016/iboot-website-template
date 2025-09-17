import { GetI18n } from "@/i18n/request";
import clsx from "clsx";

export default async function WhyChoose({
    brand
}: Readonly<{
    brand: string,
}>) {
    const t = async (key: string) => await GetI18n('Website.Page.About.WhyChoose', key);
    const data = [
        {
            title: await t('Premium.title'),
            desc: await t('Premium.desc'),
            css: 'from-purple-500 to-indigo-600'
        },
        {
            title: await t('Innovation.title'),
            desc: await t('Innovation.desc'),
            css: 'from-purple-500 to-indigo-600'
        },
        {
            title: await t('Customer.title'),
            desc: await t('Customer.desc'),
            css: 'from-purple-500 to-indigo-600'
        }
    ]
    return (
        <>
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose {brand}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    data.map((item, index) => <Card key={item.title + index} title={item.title} desc={item.desc} css={item.css} />)
                }
            </div>
        </>
    );
}

function Card({
    title,
    desc,
    css = "from-purple-500 to-indigo-600"
}: Readonly<{
    title: string,
    desc: string
    css?: string
}>) {
    return (
        <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-xl text-center">
            <div className={clsx('w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-r', css)}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-800 dark:text-gray-300">
                {desc}
            </p>
        </div>
    )
}