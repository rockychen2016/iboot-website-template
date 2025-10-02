'use client'

import clsx from "clsx";
import { Image } from "@heroui/react";

export default function Banner({
    banners,
    removeWrapper = true,
    isZoomed = true,
    maxHeight
}: {
    banners: Array<ImageFile>,
    removeWrapper?: boolean,
    isZoomed?: boolean,
    maxHeight?:string
}) {
    return (
        banners.length > 0 ? <div className={clsx('flex justify-center rounded-2xl overflow-hidden')}>
            <Image isBlurred isZoomed={isZoomed} removeWrapper={removeWrapper} className="w-full" src={banners[0].fileUrl} alt="pic" />
        </div> : null
    );
}