import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/page/contact/contact-info";
import LocationCard from "@/components/page/contact/location-card";
import { GetChannelWeb } from "../api/server/server";
import { Metadata } from "next";
import { cookies } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const cookie = await cookies();
  const lang = cookie.get('COOKIE_NAME')?.value;
  if (!lang || lang === 'ru') {
    return (await GetChannelWeb('C35707170632896512')).metadata;
  }else{
    return (await GetChannelWeb('C35707297082773504')).metadata;
  }
}


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
      <div className="mt-16 rounded-2xl overflow-hidden">
        <LocationCard />
      </div>
    </div>
  );
}
