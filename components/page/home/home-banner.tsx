'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface SlideBase {
    title: string;
    description: string;
    cta: string;
}

interface WebsiteSlide extends SlideBase {
    features: string[];
}

interface SoftwareSlide extends SlideBase {
    services: string[];
    experience: string;
}

type Slide = WebsiteSlide | SoftwareSlide;

export default function HomeBanner() {
    const t = useTranslations('Website.Page.Home.Banner');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides: Slide[] = [
        {
            title: t('website.title'),
            description: t('website.description'),
            features: [
                t('website.features.crossBorder'),
                t('website.features.ecommerce'),
                t('website.features.corporate'),
                t('website.features.multiPlatform'),
                t('website.features.seo'),
                t('website.features.fastDeployment')
            ],
            cta: t('website.cta')
        },
        {
            title: t('software.title'),
            description: t('software.description'),
            services: [
                t('software.services.miniprogram'),
                t('software.services.wechat'),
                t('software.services.wecom'),
                t('software.services.iot'),
                t('software.services.llm')
            ],
            experience: t('software.experience'),
            cta: t('software.cta')
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const isWebsiteSlide = (slide: Slide): slide is WebsiteSlide => {
        return 'features' in slide;
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg max-md:h-[350px]">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 max-md:from-purple-900 max-md:to-blue-600"></div>
                    <div className="relative z-10 h-full flex items-center">
                        <div className="container mx-auto px-16 relative max-md:px-2">
                            <div className="pb-0 pt-4 px-6">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-300">{slide.title}</h2>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-gray-300 mb-4 text-lg">{slide.description}</p>
                                <div className='flex justify-start max-md:hidden'>
                                    {isWebsiteSlide(slide) ? (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            {slide.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-green-600 mr-2">✓</span>
                                                    <span className="text-gray-200">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="mb-6">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                                {slide.services.map((service, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-green-600 mr-2">✓</span>
                                                        <span className="text-gray-200">{service}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='mx-auto flex justify-center'>
                                <a className="bg-primary font-bold py-3 px-8 rounded-full text-gray-300 hover:opacity-50 transition-colors duration-300" href='/product'>
                                    {slide.cta}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* 轮播指示器 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide
                            ? 'bg-white dark:bg-gray-200'
                            : 'bg-white/50 dark:bg-gray-500'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}