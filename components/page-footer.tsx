import { GetWebChannelListByUri } from "@/app/api/server/server";
import { GetI18n } from "@/i18n/request";
import { Link } from "@heroui/link";
import FooterContact from "./footer-contact";
import IcpNumber from "./icp-number";
import FriendLink from "./friend-link";


export default async function PageFooter({
    website
}: Readonly<{
    website: Website
}>) {
    const ProChannels = await GetWebChannelListByUri('/product')
    const t = async (key: string) => {
        return await GetI18n("Website.Footer", key);
    }

    return (
        <footer className="w-full py-10 bg-gray-800 text-gray-300 dark:bg-transparent dark:text-gray-300 border-t border-gray-300 dark:border-gray-600">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">iBoot.fun</h3>
                        <p className="mb-4 text-sm">
                            {
                                website.description ?? ''
                            }
                        </p>
                        <div className="flex gap-2 space-x-4">
                            {/* 显示公众号二维码 */}
                            {
                                website.wxQrcodeUrl && website.wxQrcodeUrl.length > 0 ? <div className="flex flex-col gap-1">
                                    <img src={website.wxQrcodeUrl} alt="wechat qrcode" width={100} />
                                    <p className="text-center text-xs">{t('WxQrcode')}</p>
                                </div> : null
                            }
                            {
                                website.qrcodeUrl && website.qrcodeUrl.length > 0 ? <div className="flex flex-col gap-1">
                                    <img src={website.qrcodeUrl} alt="website qrcode" width={100} />
                                    <p className="text-center text-xs">{t('PhoneQrcode')}</p>
                                </div> : null
                            }
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">{t('BottomNavbar.Products')}</h4>
                        <ul className="space-y-2">
                            {
                                ProChannels.map(item => <li key={item.id}>
                                    {(item.children && item.children.length > 0) ? <>
                                        <span className="text-white">{item.name}</span>
                                        <ul className="space-x-2 ml-4 text-sm pt-1 list-decimal">
                                            {
                                                item.children.map(subItem => <li key={subItem.id} className="py-1">
                                                    {
                                                        subItem.showDetail ? <a href={`/product/${subItem.id}`} className="hover:opacity-50">{subItem.name}</a> : <span className="text-gray-500">{subItem.name}<i className="text-xs">({t('notLink')})</i></span>
                                                    }
                                                </li>)
                                            }
                                        </ul>
                                    </> : item.showDetail ? <a className="hover:opacity-50" href={`/product/${item.id}`}>{item.name}</a> : null}
                                </li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">{t('BottomNavbar.Company')}</h4>
                        <ul className="space-y-2">
                            <li><a className="hover:opacity-50" href="/about">{t('BottomNavbar.About')}</a></li>
                            <li><a className="hover:opacity-50" href="/contact">{t('BottomNavbar.Contact')}</a></li>
                            <li><a className="hover:opacity-50" href="/case">{t('BottomNavbar.Case')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <FooterContact />
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                <div>&copy; {new Date().getFullYear()}  {website.name} All rights reserved. <IcpNumber /></div>
            </div>
            <div className="flex justify-center">
                <Link
                    size="sm"
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://iboot.fun"
                    title="Iboot.fun homepage"
                >
                    <span>Powered by</span>
                    <p className="text-white">IBoot.fun</p>
                </Link>
            </div>
            <FriendLink />
        </footer>
    );
}