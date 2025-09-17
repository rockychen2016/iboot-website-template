'use server';

import { cookies, headers } from 'next/headers';
import { defaultLocale, locales } from './config';
import { NextResponse } from 'next/server';
const COOKIE_NAME = 'NEXT_LOCALE';
const COOKIE_WEBSITE_ID = 'NEXT_WEBSITE_ID';
const COOKIE_WEBSITE_NO = 'NEXT_WEBSITE_NO';
export async function GetUserLocale() {
  const locale = (await cookies()).get(COOKIE_NAME)?.value
  if (locale) return locale
  const acceptLanguage = (await headers()).get('accept-language')
  const parsedLocale = acceptLanguage?.split(',')[0].split('-')[0] ?? ''
  const lang = locales.includes(parsedLocale) ? parsedLocale : defaultLocale;
  return lang;
}

export async function setUserLocale(locale: I18N, websiteId:string, websiteNo:string) {
  const cookie = await cookies();
  cookie.set(COOKIE_NAME, locale);
  cookie.set(COOKIE_WEBSITE_ID, websiteId);
  cookie.set(COOKIE_WEBSITE_NO, websiteNo);
}

export async function routerSetLocale(response: NextResponse, locale: I18N, websiteId:string, websiteNo:string) {
  response.cookies.set(COOKIE_NAME, locale);
  response.cookies.set(COOKIE_WEBSITE_ID, websiteId);
  response.cookies.set(COOKIE_WEBSITE_NO, websiteNo);
}
