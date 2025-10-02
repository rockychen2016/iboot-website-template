'use client'
import { Image } from "@heroui/react";

export default function Logo() {
  return (
    <>
      <Image 
        radius="none" 
        src="/logo_black.png" 
        alt="logo" 
        className="block dark:hidden"
        height={30}
      />
      <Image 
        radius="none" 
        src="/logo_white.png" 
        alt="logo" 
        className="hidden dark:block"
        height={30}
      />
    </>
  );
}