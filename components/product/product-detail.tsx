'use client'
import { useState } from "react";
import { Image } from "@heroui/react";
export default function ProductDetail({
    product
}: { product: ProductContent }) {

    const images = product.attachmentList ?? [];
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const specifications = (product.proSpec ?? '').split('\n');
    const features = (product.proFeatures ?? '').split('\n');
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 产品图片部分 */}
            <div>
                <div className="bg-gradient-to-br from-purple-900 to-indigo-800 rounded-2xl flex items-center justify-center mb-6">
                    <Image width={768} isBlurred isZoomed src={product.thumbUrl} alt={product.proName} />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br from-purple-900 to-indigo-800 rounded-xl h-20 flex items-center justify-center overflow-hidden cursor-pointer ${selectedImageIndex === index ? 'ring-2 ring-purple-500' : ''}`}
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <Image isBlurred isZoomed src={_.fileUrl} alt={_.fileName} />
                        </div>
                    ))}
                </div>
            </div>

            {/* 产品信息部分 */}
            <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.proName}</h1>
                <div className="flex items-center mb-6">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="ml-2 text-gray-400">({10} reviews)</span>
                </div>

                <p className="text-gray-300 text-lg mb-8">{product.description}</p>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Specifications</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {specifications.map((spec, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>{spec}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {
                    features.length > 0 ? <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Key Features</h3>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                feature && feature.length > 0 ? <li key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>{feature}</span>
                                </li> : null
                            ))}
                        </ul>
                    </div> : null
                }

                {/* <div className="text-3xl font-bold mb-6">${product.proPrice.toFixed(2)}</div> */}
            </div>
        </div>

    );
}