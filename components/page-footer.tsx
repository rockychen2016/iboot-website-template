import { GetWebChannelList } from "@/app/api/server/server";
import { GetI18n } from "@/i18n/request";
import { Link } from "@heroui/link";
import { cookies } from "next/headers";
import FooterContact from "./footer-contact";
import Share from "./share";


export default async function PageFooter() {
    const cookie = await cookies();
    const lang = cookie.get('COOKIE_NAME')?.value;

    const ProChannels = (!lang || lang === 'ru') ? await GetWebChannelList('9300017214') : await GetWebChannelList('8900028384');
    const t = async (key: string) => {
        return await GetI18n("Website.Footer", key);
    }

    return (
        <footer className="container mx-auto px-4 py-12 mt-12 border-t border-gray-300 dark:border-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">FunTaste</h3>
                    <p className="mb-4">
                        {
                            t('desc')
                        }
                    </p>
                    <div className="flex space-x-4">
                        <Share />
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">{t('Products')}</h4>
                    <ul className="space-y-2">
                        {
                            ProChannels.map(item => <li key={item.id}><a href={`/product/${item.channelNo}`}>{item.name}</a></li>)
                        }
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">{t('Company')}</h4>
                    <ul className="space-y-2">
                        <li><a href="/about">{t('About')}</a></li>
                        <li><a href="/contact">{t('Contact')}</a></li>
                    </ul>
                </div>

                <div>
                    <FooterContact />
                </div>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-600 mt-12 pt-8 text-center">
                <p>&copy; {new Date().getFullYear()}  Fun Taste co.ltd. All rights reserved. This product contains nicotine. Nicotine is an addictive chemical.</p>
            </div>
            <div className="flex justify-center">
                <Link
                    size="sm"
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://iboot.fun"
                    title="Iboot.fun homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">IBoot.fun</p>
                </Link>
            </div>
        </footer>
    );
}