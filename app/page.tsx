
import CustomersSayCard from "@/components/customers-say-card";
import { GetHomeWeb, GetReviewList } from "./api/server/server";
import Subscribe from "@/components/subscribe";
import HomeBanner from "@/components/page/home/home-banner";
import HomeIBootCms from "@/components/page/home/home-iboot-cms";
const page = async () => GetHomeWeb();
export const metadata = async () => (await page()).metadata

export default async function Home() {
  const reviewData = await GetReviewList({})

  return (
    <>
      {
        /**
         * AI操作请在这里插入
         */
      }
      <HomeBanner />

      <section className="container mx-auto pt-16 pb-8 rounded-md dark:shadow-none dark:px-0">
        <HomeIBootCms />
      </section>

      {/* Technology Section */}
      {/* <section className="container mx-auto py-16">
        <TechnologyWrap />
      </section> */}

      {/* Reviews */}
      {
        reviewData && reviewData.length > 0 ? <section className="container mx-auto py-8 px-6 shadow-2xl rounded-md dark:shadow-none dark:px-0">
          <CustomersSayCard data={reviewData} />
        </section> : null
      }

      {/* CTA Section */}
      <section className="container mx-auto py-16 px-6 dark:px-0">
        <Subscribe />
      </section>
    </>
  );
}
