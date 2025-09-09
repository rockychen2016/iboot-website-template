
import { GetProductDetailWeb } from "@/app/api/server/server";
import ProductDetail from "@/components/page/product/product-detail";
import ProductUserReview from "@/components/page/product/product-user-review";
import { GetI18n } from "@/i18n/request";
import { Metadata } from "next";

const page = async (id: string) => await GetProductDetailWeb(id);
export async function generateMetadata(
    { params }: PageParamsProps,
): Promise<Metadata> {
    const id = (await params).id
    return (await page(id)).metadata
}

export default async function ProductDetailPage({
    params
}: Readonly<{
    params: Promise<{ id: string }>
}>) {
    const t = async (key: string) => await GetI18n('Website.Page.Prodducts', key)
    const proId = (await params).id;
    const product = (await page(proId)).content;
    return (
        <div className="container mx-auto py-8">
            <div className="mb-6">
                <a
                    href="/product"
                    className="text-purple-400 hover:text-purple-300 flex items-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    {t('backto')}
                </a>
            </div>
            <ProductDetail product={product} />
            <ProductUserReview entityNo={product.entityNo} />
        </div>
    );
}



