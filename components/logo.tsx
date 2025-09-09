'use client'
import { Image } from "@heroui/react";

export default function Logo() {
  return (
    <>
      <Image 
        radius="sm" 
        src="/logo_black.png" 
        alt="logo" 
        className="block dark:hidden"
      />
      <Image 
        radius="sm" 
        src="/logo_while.png" 
        alt="logo" 
        className="hidden dark:block"
      />
    </>
  );
}