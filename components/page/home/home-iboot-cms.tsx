import { GetI18n } from "@/i18n/request";

export default async function HomeIBootCms() {
    const t = async (key: string) => await GetI18n('Website.Page.Home.IBootCMS', key);
    const b = async (key: string) => await GetI18n('Components.Button', key)
    const productFeatures = [
        {
            "icon": "📄",
            "color": "from-blue-500 to-cyan-500"
        },
        {
            "icon": "💬",
            "color": "from-green-500 to-emerald-500"
        },
        {
            "icon": "🌐",
            "color": "from-purple-500 to-indigo-500"
        },
        {
            "icon": "🔌",
            "color": "from-orange-500 to-amber-500"
        }
    ];
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
                {t('title')}
                <p className="py-2 text-medium">{t('subtitle')}</p>
            </h2>
            <div className="flex flex-col gap-3 p-6 shadow-2xl rounded-2xl dark:border-1 border-gray-800">
                <div className="flex gap-12">
                    <div className="md:w-1/3 flex flex-col gap-3">
                        <h3 className="text-lg font-bold">{t('h3')}</h3>
                        <p className="mx-auto">{t('desc')}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {productFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white flex flex-col items-center dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                                >
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-2xl mb-6`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{t(`Features.${index}.title`)}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-center">{t(`Features.${index}.description`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 bg-[url(/cms.png)] bg-cover bg-top rounded-t-2xl" />
                </div>
                <div className="flex justify-center">
                    <a href="/product/C46586966082457600" className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors">
                        {b('btn_detail')}
                    </a>
                </div>

            </div>
        </>
    );
}