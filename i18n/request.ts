import { getRequestConfig, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { GetUserLocale } from './service';
import { defaultLocale } from './config';
export default getRequestConfig(async () => {
  const locale = await GetUserLocale();
  let msg;
  try {
    msg = (await import(`./json/${locale}.json`)).default;
  } catch (e) {
    msg = (await import(`./json/${defaultLocale}.json`)).default;
  }
  return {
    locale,
    messages: msg
  };
});

export const MetaData = async (ns: string, subns?: string): Promise<Metadata> => {
  const t = await getTranslations(ns);
  const title = subns ? (t('title') + t(`${subns}.title`)) : t('title');
  const description = subns ? t(`${subns}.description`) : t('description');
  return {
    title: title,
    description: description,
  }
}

export const MetaDataDynamic = async (ns: string, name: string): Promise<Metadata> => {
  const t = await getTranslations(ns);
  return {
    title: t('title', { "name": name }),
    description: t('description'),
  }
}

export const GetI18n = async (ns: string, key: string): Promise<string> => {
  const t = await getTranslations(ns);
  return t(key);
}
