
import { GetChannelById, GetProductDetailWeb } from "@/app/api/server/server";
import Banner from "@/components/banner";
import ContactBanner from "@/components/contact-banner";
import RichWrap from "@/components/rich-wrap";
import { GetI18n } from "@/i18n/request";
import { Metadata } from "next";
import { ReactNode } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import DetailMiniPro from "./detail-mini-pro";
import DetailWxPlu from "./detail-wx-plu";
import DetailWxWork from "./detail-wx-work";
import DetailIot from "./detail-iot";
import DetailLlm from "./detail-llm";
import DetailCrossBorderEcommerce from "./detail-cross-border-ecommerce";
import DetailEcommerce from "./detail-ecommerce";
import DetailCorporateWebsite from "./detail-corporate-website";
import DetailFrontendCooperation from "./detail-frontend-cooperation";
import DetailBackendCooperation from "./detail-backend-cooperation";
import DetailAiCustomerService from "./detail-ai-customer-service";
import DetailRagKnowledgeBase from "./detail-rag-knowledge-base";
import BannerInfo from "@/components/banner-info";
import DetailCms from "./detail-cms";

const page = async (id: string) => await GetChannelById(id);
export async function generateMetadata(
    { params }: PageParamsProps,
): Promise<Metadata> {
    const id = (await params).id
    return (await page(id)).metadata
}

export default async function DetailPage({
    params
}: Readonly<{
    params: Promise<{ id: string }>
}>) {
    const t = async (key: string) => await GetI18n('Website.Page.Product', key)
    const cid = (await params).id;
    const content = (await page(cid)).content;
    const ExtDetailContent = (id: string) => {
        switch (id) {
            case 'C42652734264053760':
                return <DetailMiniPro />
            case 'C42652803461681152':
                return <DetailWxPlu />
            case 'C42652988875083776':
                return <DetailWxWork />
            case 'C42653670898274304':
                return <DetailIot />
            case 'C42654057139146752':
                return <DetailLlm />
            case 'C42656899954511872':
                return <DetailCrossBorderEcommerce />
            case 'C42657049603084288':
                return <DetailEcommerce />
            case 'C42657166947127296':
                return <DetailCorporateWebsite />
            case 'C42660295180685312':
                return <DetailFrontendCooperation />
            case 'C42660402135437312':
                return <DetailBackendCooperation />
            case 'C42660975517765632':
                return <DetailAiCustomerService jumpText={content.jumpText} jumpUrl={content.jumpUrl} />
            case 'C42661162613084160':
                return <DetailRagKnowledgeBase jumpText={content.jumpText} jumpUrl={content.jumpUrl} />
            case 'C46586966082457600':
                return <DetailCms jumpText={content.jumpText} jumpUrl={content.jumpUrl} />
            default:
                return <></>
        }
    }
    return (
        <div className="flex flex-col gap-3">
            <a href="/product" className="lg:hidden dark:text-purple-400 dark:hover:text-purple-300 flex items-center">
                <AiFillCaretLeft />
                {t('backto')}
            </a>
            <div className="md:hidden">
                <Banner banners={content.banners ?? []} />
            </div>
            {/* {
                cid != 'C42661162613084160' ? <div className="mx-auto py-4 md:py-8 flex flex-col gap-2">
                    <h1 className="mx-auto text-3xl md:text-4xl font-bold dark:bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text dark:text-transparent">{content.name}</h1>
                    <p className="text-center max-w-3xl mx-auto">{content.subTitle}</p>
                    <p className="w-20 h-1 bg-black mx-auto rounded-full dark:bg-gray-100" />
                    <p className="text-gray-500 text-small">{content.introduction}</p>
                </div> : null
            } */}
            <BannerInfo tag={content.tagLabel} title={content.name} description={content.introduction ?? ''}>
                <div className="flex flex-wrap gap-4">
                    {
                        content.jumpUrl && content.jumpUrl.length > 0 ? <a href={content.jumpUrl} target="_blank" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
                            {content.jumpText ?? ''}
                        </a> : null
                    }
                    {/* <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors">
                        产品演示
                    </button> */}
                </div>
            </BannerInfo>

            {/* 内容展示区域 */}
            <div className="w-full">
                <RichWrap richText={content.content ?? ''} />
            </div>
            {
                ExtDetailContent(cid)
            }

        </div>
    );
}



