
import ProductCategoryWrap from '@/components/page/product/product-category-wrap';
import ProductListItemWrap from '@/components/page/product/product-list-item-wrap';
import { GetChannelWeb, GetProductForPage } from '../api/server/server';
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import ProductSortWrap from '@/components/page/product/product-sort-wrap';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLocale();
  if (!lang || lang === 'ru') {
    return (await GetChannelWeb('C35707016420921344')).metadata;
  } else {
    return (await GetChannelWeb('C35069319696224256')).metadata;
  }
}

export default async function ProductsPage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const t = await getTranslations('Website.Page.Prodducts'); //await GetI18n('Page', 'Prodducts')
  const params = await searchParams;
  const catid = params['catid']?.toString();
  const sortBy = params['sortBy']?.toString();
  const sort = params['sort']?.toString();

  const ProductData = await GetProductForPage({
    pageNo: 1,
    pageSize: 100,
    sortBy: sortBy?.toString() ?? 'createTime',
    sort: sort ? sort as SortDirection : 'DESC'
  })

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('ourProduct')}</h1>

      {/* 桌面端分类导航 */}
      <div className="mb-8 overflow-x-auto hidden md:block">
        <ProductCategoryWrap catid={catid} />
      </div>

      {/* 搜索框 */}

      {/* 排序 */}
      <ProductSortWrap sort={sort ? sort as SortDirection : 'DESC'} sortBy={sortBy ?? 'createTime'} />
      {/* 产品列表 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ProductData.content.map((product) => <ProductListItemWrap key={product.id} product={product} />)}
      </div>

    </div>
  );
}