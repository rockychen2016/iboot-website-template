// app/product/page.tsx
import ContactBanner from '@/components/contact-banner';
import { GetChannelByUrl } from '../api/server/server';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { AiOutlineCaretRight } from 'react-icons/ai';

export async function generateMetadata(): Promise<Metadata> {
  return (await GetChannelByUrl('/product')).metadata
}

export default async function ProductsPage() {
  const t = await getTranslations('Website.Page.Product');
  const b = await getTranslations('Components.Button');
  const model = await GetChannelByUrl('/product', true);
  const channel = { ...model.content, children: [] }
  const children = [...model.content.children ?? []]

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-center">{t('ourProduct')}</h1>

      <div className="text-center mb-12">
        <p className="text-lg max-w-3xl mx-auto">
          {channel.introduction ?? ''}
        </p>
      </div>

      {children.map((item) => (
        <div key={item.id} className="mb-16 shadow-2xl p-4 rounded-lg dark:bg-gray-900">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b-1 border-gray-300 dark:border-gray-500">
            {item.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(item.children ?? []).map((service, index) => (
              <div
                key={service.id}
                className={`rounded-xl overflow-hidden transition-all duration-300 md:bg-gray-100 hover:shadow-xl dark:bg-gray-800 ${index > 0 ? 'max-md:border-t-1 max-md:rounded-none border-gray-300 dark:border-0' : ''}`}
              >
                <div className="pl-6 pt-6 pr-6 pb-4 h-full flex flex-col justify-between">
                  <div className=" flex items-start mb-4">
                    {
                      service.thumbUrl && service.thumbUrl.length > 0 ? <img className='w-16 h-16 rounded-xl flex justify-center items-center mr-4' src={service.thumbUrl} /> : <div className="bg-gray-200 border-1 border-dashed rounded-xl w-16 h-16 flex items-center justify-center mr-4" />
                    }
                    <div className='flex flex-col gap-1'>
                      <h3 className="text-xl font-bold">{service.name}</h3>
                      <p className='text-sm'>{service.subTitle ?? ''}</p>
                    </div>
                  </div>
                  <p className='flex-1'>{service.introduction ?? ''}</p>
                  {
                    service.showDetail ? <p className='mt-2 flex justify-end items-center text-primary hover:opacity-50'>
                      <a href={`/product/${service.id}`}>{b('btn_detail')}</a>
                      <AiOutlineCaretRight size={14} />
                    </p> : <p className='flex justify-end text-xs text-gray-500'>{t('notLink')}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <ContactBanner title={t('contact.title')} description={t('contact.desc')} />
    </>
  );
}