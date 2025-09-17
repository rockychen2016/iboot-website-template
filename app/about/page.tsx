import Our from "@/components/page/about/our";
import WhyChoose from "@/components/page/about/why-choose";
import TextImageBox from "@/components/text-image-box";
import { GetI18n } from "@/i18n/request";
import { getLocale, getTranslations } from "next-intl/server";
import { GetChannelWeb } from "../api/server/server";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLocale();
  if (!lang || lang === 'ru') {
    return (await GetChannelWeb('C35707170632896512')).metadata;
  } else {
    return (await GetChannelWeb('C35069256630669312')).metadata;
  }
}


export default async function AboutPage() {
  const t = async (key: string) => await GetI18n('Website.Page.About', key);
  const b = await getTranslations('Website.Page.About');
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('title')}</h1>
      <TextImageBox title={await t('Story.title')} content={
        b.rich('Story.desc', {
          li: (chunks) => <p className="mb-6">{chunks}</p>
        })
      } />
      <TextImageBox left={false} src="/about.png" title={await t('Mission.title')} content={
        b.rich('Mission.desc', {
          li: (chunks) => <p className="mb-6">{chunks}</p>
        })
      } />
      <div className="mb-16">
        <WhyChoose brand="FUNTASTE" />
      </div>
      <Our />
    </div>
  );
}
