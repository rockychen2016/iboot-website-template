import { getTranslations } from "next-intl/server"

export default async function ContactBanner({
    title,
    description
}: Readonly<{
    title: string,
    description: string,
}>) {
    const t = await getTranslations('Components.Button')
    return (
        <div className="my-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="mb-6 max-w-2xl mx-auto">
                {description}
            </p>
            <a className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300" href='/contact'>
                {t('btn_contact')}
            </a>
        </div>
    )
}