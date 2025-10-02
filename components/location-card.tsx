import { GetI18n } from "@/i18n/request";

export default async function LocationCard() {
    const t = async (key:string)=>await GetI18n("Components.LocationCard", key)
    return (
        <div className="bg-gray-200 dark:bg-gradient-to-r from-purple-900 to-indigo-800 h-96 flex items-center justify-center">
            <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">{t('location')}</h3>
                <p className="dark:text-gray-200 max-w-2xl">
                    {t('locationDesc')}
                </p>
                <button className="mt-6 bg-white text-purple-900 hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition">
                    {t('locationBtn')}
                </button>
            </div>
        </div>
    );
}