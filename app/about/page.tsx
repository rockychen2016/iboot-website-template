import WhyChoose from "@/components/about/why-choose";
import { GetI18n } from "@/i18n/request";
import { Metadata } from "next";
import { GetChannelByUrl } from "../api/server/server";
import AboutUs from "@/components/about/about-us";
import TextImageBox from "@/components/text-image-box";


export async function generateMetadata(): Promise<Metadata> {
  return (await GetChannelByUrl('/about')).metadata
}


export default async function AboutPage() {
  const t = async (key: string) => await GetI18n('Website.Page.About', key);
  const content = (await GetChannelByUrl('/about')).content;
  const bannerUrl = (content.banners ?? []).length > 0 ? content.banners![0].fileUrl : content.thumbUrl;
  return (
    <>
      <div className="hidden">
        <h1>{t('title')}</h1>
        {content.content ?? ''}
      </div>
      <div className="mb-16">
        <TextImageBox title={await t('title')} src={bannerUrl} content={content.content ?? ''} />
      </div>
      <div className="mb-16">
        <WhyChoose />
      </div>
      <AboutUs />
    </>
  );
}
