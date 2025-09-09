'use client'
import clsx from "clsx";
import RichWrap from "./rich-wrap";
import { Image } from "@heroui/react";

export default function TextImageBox({
    title,
    content,
    src,
    left = true,
    css = "bg-gradient-to-br from-purple-900 to-indigo-800"
}: Readonly<{
    title: string,
    content: string | React.ReactNode,
    src?: string,
    left?: boolean,
    css?: string,
}>) {
    const value = typeof content === 'string' ? <RichWrap richText={content} /> : content
    return (
        <div className={clsx('grid grid-cols-1 items-center mb-16', src && src.length > 0 ? 'gap-12 lg:grid-cols-2' : '')}>
            {
                left && src && src.length > 0 ? (<div className={clsx('order-last lg:order-first rounded-2xl h-96 flex items-center justify-center', css)}>
                    <Image isBlurred isZoomed src={src} alt="Premium Vaping" />
                </div>) : null
            }
            <div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                {
                    value
                }
            </div>
            {
                !left && src && src.length > 0 ? (
                    <div className={clsx('order-last lg:order-first rounded-2xl h-96 flex items-center justify-center', css)}>
                        <Image isBlurred isZoomed src={src} alt="Premium Vaping" />
                    </div>
                ) : null
            }
        </div>
    );
}