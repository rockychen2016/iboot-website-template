import { GetI18n } from "@/i18n/request";


export default async function Our() {
    const t = async (key: string) => await GetI18n('Website.Page.About.Our', key)
    const data = [{
        "label": await t('data.Members'),
        "value": "50+"
    }, {
        "label": await t('data.Customers'),
        "value": "1M+"
    }, {
        "label": await t('data.Products'),
        "value": "50+"
    }, {
        "label": await t('data.Countries'),
        "value": "8"
    }]
    return (
        <div className="bg-gray-100 dark:bg-gradient-to-r from-purple-700 to-indigo-800 rounded-3xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('title')}</h2>
                <p className="dark:text-gray-200 mb-8">
                    {t('desc')}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        data.map((item, index) => <div key={item.label + index} className="text-center">
                            <div className="text-3xl font-bold">{item.value}</div>
                            <div className="text-gray-700 dark:text-gray-200">{item.label}</div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}