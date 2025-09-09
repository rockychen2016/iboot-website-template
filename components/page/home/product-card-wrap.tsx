'use client'
import clsx from "clsx";
import { Image } from "@heroui/react";
import { useTranslations } from "next-intl";


export default function ProductCardWrap({
    product,
    styleClass = 'bg-gradient-to-r from-purple-500 to-indigo-600'
}: Readonly<{
    product: ProductContent
    styleClass?: string,
}>) {
    const b = useTranslations('Components.Button')
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className={clsx('flex items-center justify-center overflow-hidden', styleClass)}>
                <Image className="h-64" radius="none" isBlurred isZoomed src={product.thumbUrl} alt={product.proName} />
            </div>
            <div className="p-2 flex flex-col gap-2">
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{product.proName}</h3>
                    <p className="text-gray-300 mb-4">{product.proIntroduction ?? ''}</p>
                </div>
                <div className="flex justify-center items-center pb-2">
                    <a href={`/product/${product.id}`} className="bg-purple-600 hover:bg-purple-700 text-white py-1 px-4 rounded-full transition cursor-pointer">
                        {b('btn_learn_more')}
                    </a>
                </div>
            </div>
        </div>
    );
}