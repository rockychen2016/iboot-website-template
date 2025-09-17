
import { GetHomeWeb, GetProductsByGroup } from "./api/server/server";
import Subscribe from "@/components/page/home/subscribe";
import CustomersSay from "@/components/page/home/customers-say";
import TechnologyWrap from "@/components/page/home/technology-wrap";
import ProductCardWrap from "@/components/page/home/product-card-wrap";
import { GetI18n } from "@/i18n/request";
import { getLocale } from "next-intl/server";

const page = async () => GetHomeWeb();
export const metadata = async () => (await page()).metadata

export default async function Home() {
  const locale = await getLocale();
  let recommended: Array<ProductContent> = [];

  if (!locale || locale == 'ru') {
    recommended = [...await GetProductsByGroup('C35729751662530560')]
  } else {
    recommended = [...await GetProductsByGroup('C35074930030809088')]
  }

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 flex flex-col items-center text-center shadow-lg px-2 rounded-md dark:shadow-none dark:px-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{await GetI18n("Website.Page.Home", "section_title")}</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl">
          {
            await GetI18n("Website.Page.Home", "section_desc")
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Shop Now
          </button> */}
          <a href="/about" className="bg-transparent border-2   dark:border-white hover:opacity-50 hover:text-black dark:text-white font-bold py-3 px-8 rounded-full transition duration-300">
            {
              await GetI18n('Components.Button', 'btn_learn_more')
            }
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {
            await GetI18n("Website.Page.Home", "featured_products")
          }
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {
            recommended.map(item => <ProductCardWrap key={item.id} product={item} />)
          }

        </div>
        <div className="py-5 flex justify-center items-center">
          <a href="/product" className="bg-transparent border-2 dark:border-white hover:opacity-50 dark:text-white font-bold py-3 px-8 rounded-full transition duration-300">
            {
              await GetI18n('Components.Button', 'btn_learn_more')
            }
          </a>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto py-16">
        <TechnologyWrap />
      </section>

      {/* Testimonials */}
      <section className="container mx-auto py-16 shadow-2xl px-2 dark:shadow-none dark:px-0">
        <CustomersSay />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16">
        <Subscribe />
      </section>
    </>
  );
}
