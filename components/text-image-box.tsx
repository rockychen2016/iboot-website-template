'use client'
import clsx from "clsx";
import RichWrap from "./rich-wrap";
import { Image } from "@heroui/react";

export default function TextImageBox({
    title,
    content,
    src,
    postion = 'top',
    isZoomed = true,
    css = "bg-gradient-to-br from-purple-900 to-indigo-800"
}: Readonly<{
    title: string,
    content: string | React.ReactNode,
    src?: string,
    postion?: 'left' | 'right' | 'top',
    isZoomed?: boolean,
    css?: string,
}>) {
    const value = typeof content === 'string' ? <RichWrap richText={content} /> : content
    return (
        postion === 'top' ?
            <div className={clsx('w-full flex flex-col gap-12')}>
                {src && src.length > 0 ? <div className={clsx('flex justify-center rounded-2xl max-h-[300px] overflow-hidden', css)}>
                    <Image isBlurred isZoomed={isZoomed} removeWrapper className="w-full" src={src} alt="pic" />
                </div> : null}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-4">{title}</h1>
                    {
                        value
                    }
                </div>
            </div> :
            <div className={clsx('w-full grid grid-cols-1 mb-16', src && src.length > 0 ? 'gap-12 lg:grid-cols-2' : '')}>
                {
                    postion === 'left' && src && src.length > 0 ? (<div className={clsx('order-last lg:order-first rounded-2xl flex justify-center overflow-hidden', css)}>
                        <Image isBlurred isZoomed={isZoomed} removeWrapper src={src} alt="pic" />
                    </div>) : null
                }
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-4">{title}</h1>
                    {
                        value
                    }
                </div>
                {
                    postion === 'right' && src && src.length > 0 ? (
                        <div className={clsx('order-first lg:order-last rounded-2xl flex justify-center overflow-hidden', css)}>
                            <Image isBlurred isZoomed={isZoomed} removeWrapper src={src} alt="pic" />
                        </div>
                    ) : null
                }
            </div>
    );
}