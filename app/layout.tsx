import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { UIProviders } from "@/providers/ui-providers";
import { getLocale } from "next-intl/server";
import { GetCurWebsite, GetI18NList } from "./api/server/server";
import { NextIntlClientProvider } from "next-intl";
import PageFooter from "@/components/page-footer";
import CurrentWebsiteProvider from "@/providers/website-provider";


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const i18nlist = await GetI18NList();
  const curWebsite = await GetCurWebsite();

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider>
          <CurrentWebsiteProvider website={curWebsite}>
            <UIProviders locale={locale} themeProps={{ attribute: "class", defaultTheme: "dark" }}>
              <div className="relative flex flex-col h-screen">
                <Navbar i18nList={i18nlist} lang={locale} />
                <main className="container mx-auto max-w-7xl pt-16 px-4 lg:px-8 flex-grow">
                  {children}
                </main>
                <PageFooter />
              </div>
            </UIProviders>
          </CurrentWebsiteProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
