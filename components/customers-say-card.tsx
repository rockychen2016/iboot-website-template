import { GetI18n } from "@/i18n/request";
import { dateFormat } from "@/utils/date-utils";

export default async function CustomersSayCard({
    data
}:Readonly<{
    data:Array<Reviews>
}>) {
    const t = async (key: string) => await GetI18n('Components.CustomersSay', key);
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                {t('title')}
                <p className="py-2 text-medium">{t('desc')}</p>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    (data || []).map(item => <div key={item.id} className="bg-gray-500 dark:bg-gray-800 p-8 rounded-xl">
                        <div className="flex items-center mb-4">
                            {[...Array(item.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-300 mb-6">
                            &#34;{item.message}&#34;
                        </p>
                        <div className="flex items-center">
                            {
                                item.avatar && item.avatar.length > 0 ? <img src={item.avatar} alt="avatar" className="w-12 h-12 mr-4 rounded-xl" />
                                    : <div className="bg-gray-200 rounded-xl w-12 h-12 mr-4" />
                            }
                            <div>
                                <h4 className="font-bold text-gray-100">{item.name}</h4>
                                <p className="text-gray-300 text-sm">{dateFormat(new Date(item.createTime!), 'yy/MM/dd')}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
}