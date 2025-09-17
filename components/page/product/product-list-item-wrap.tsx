
'use client'
import { Image } from "@heroui/react";
import { useTranslations } from "next-intl";
export default function ProductListItemWrap({
    product
}: Readonly<{
    product: ProductContent
}>) {
    //const specifications = (product.proSpec ?? '').split('\n');
    const b = useTranslations('Components.Button')
    return (
        <div
            key={product.id}
            className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
        >
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <Image className="h-56" radius="none" isBlurred isZoomed src={product.thumbUrl} alt={product.proName} />
            </div>
            <div className="p-2 flex flex-col gap-4">
                <div className="flex-1">
                    <h3 className="text-xl mb-2 text-gray-100">{product.proName}</h3>
                    <p>{product.proIntroduction}</p>
                </div>
                <div className="flex justify-center items-center pb-2">
                    <a
                        href={`/product/${product.id}`}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full transition"
                    >
                        {b('btn_learn_more')}
                    </a>
                </div>
            </div>
        </div>
    );
}