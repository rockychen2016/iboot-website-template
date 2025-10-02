import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import LocationCard from "@/components/location-card";
import { GetChannelByUrl } from "../api/server/server";
import { Metadata } from "next";
import TextImageBox from "@/components/text-image-box";

export async function generateMetadata(): Promise<Metadata> {
  const res = await GetChannelByUrl('/contact');
  return res.metadata;
}

export default async function ContactPage() {
  const content = (await GetChannelByUrl('/contact')).content;
  const bannerUrl = (content.banners ?? []).length > 0 ? content.banners![0].fileUrl : content.thumbUrl;
  return (
    <>
      <TextImageBox title={content.subTitle ?? ''} src={bannerUrl} content={content.content ?? ''} />
      <div className="w-full grid grid-cols-1 min-lg:grid-cols-2 gap-12">
        {/* 联系信息 */}
        <div>
          <ContactInfo />
        </div>

        {/* 联系表单 */}
        <div>
          <ContactForm />
        </div>
      </div>

      {/* 地图区域 */}
      <div className="w-full mt-16 rounded-2xl overflow-hidden">
        <LocationCard />
      </div>
    </>
  );
}
