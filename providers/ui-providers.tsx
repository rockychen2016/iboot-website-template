"use client";

import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ToastProvider } from "@heroui/toast";
import LoginUserProvider from "./user-provider";
import DeviceProvider from "./device-provider";
import { ConfirmBoxProvider } from "./confirm-modal-provider";
import AlertModalProvider from "./alert-modal-provider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  locale: string
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function UIProviders({ children, themeProps, locale }: Readonly<ProvidersProps>) {
  const router = useRouter();
  return (

      <HeroUIProvider navigate={router.push} locale={locale}>
        <NextThemesProvider {...themeProps}>
          
          <ToastProvider />
          <DeviceProvider>
            <LoginUserProvider>
              <ConfirmBoxProvider>
                <AlertModalProvider>
                  {children}
                </AlertModalProvider>
              </ConfirmBoxProvider>
            </LoginUserProvider>
          </DeviceProvider>
        </NextThemesProvider>
      </HeroUIProvider>
  );
}
