import ProductListItemWrap from "@/components/page/product/product-list-item-wrap";
import { getTranslations } from "next-intl/server";
import { GetProductForPage } from "../../api/server/server";
import { AiOutlineSearch } from "react-icons/ai";

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const t = await getTranslations('Website.Page.Prodducts');
    const params = await searchParams;
    const keyword = params['keyword'];

    const ProductData = await GetProductForPage({
        pageNo: 1,
        pageSize: 100,
        sortBy: 'createTime',
        sort: 'DESC',
        keyword: keyword?.toString() ?? ''
    })
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('ourProduct')}</h1>
            </div>
            {/* 产品列表 */}
            <div className="flex gap-2 items-center">
                <AiOutlineSearch />
                <span>{keyword ?? '-'}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ProductData.content.map((product) => <ProductListItemWrap key={product.id} product={product} />)}
            </div>
        </>
    );
}