import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import Logo from "./logo";
import I18nList from "./i18n-list";
import { GetI18n } from "@/i18n/request";
import SearchInput from "./search-input";


export const Navbar = ({
  lang,
  i18nList
}: {
  lang: string,
  i18nList: Array<I18NWebSite>
}) => {

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3" href="/">
            <Logo />
            <p className="font-bold text-inherit">FUNTASTE</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start">
          {siteConfig.navItems.map(async (item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {await GetI18n("Website.TopNavbar", item.label)}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex"><SearchInput /></NavbarItem>
        <div className="w-40">
          <I18nList data={i18nList} lang={lang} />
        </div>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <SearchInput />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map(async (item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color='foreground'
                href={item.href}
                size="lg"
              >
                {await GetI18n("Website.TopNavbar", item.label)}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="w-full mt-4">
            <I18nList data={i18nList} lang={lang} />
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
