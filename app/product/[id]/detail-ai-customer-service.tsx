'use client';

import { useState } from "react";

export default function DetailAiCustomerService({
    jumpText,
    jumpUrl
}: Readonly<{
    jumpUrl?: string,
    jumpText?: string,
}>) {
    const [activeTab, setActiveTab] = useState('features');

    // 支持的平台
    const supportedPlatforms = [
        { name: "微信公众号", icon: "📱" },
        { name: "小程序", icon: "💬" },
        { name: "网站(H5)", icon: "💻" },
        { name: "APP", icon: "📲" }
    ];

    // 核心功能
    const coreFeatures = [
        {
            title: "多渠道接入",
            description: "统一管理来自不同平台的客户咨询，提升服务效率",
            icon: "🔗"
        },
        {
            title: "AI智能问答",
            description: "基于大语言模型的自动问答，7x24小时不间断服务",
            icon: "🤖"
        },
        {
            title: "人工客服协同",
            description: "智能与人工无缝切换，确保复杂问题得到妥善解决",
            icon: "👤"
        },
        {
            title: "数据分析报表",
            description: "全面的客服数据分析，优化服务质量和效率",
            icon: "📊"
        }
    ];

    // 技术优势
    const technicalAdvantages = [
        "先进的自然语言处理技术",
        "毫秒级响应速度",
        "多轮对话上下文理解",
        "意图识别准确率高达95%",
        "支持多语言和方言识别",
        "灵活的API接口集成"
    ];

    return (
        <div className="py-8">

            {/* 平台支持展示 */}
            <div className="mb-16 shadow-2xl p-6 rounded-2xl dark:bg-gray-900">
                <h2 className="text-3xl font-bold text-center mb-10">全平台支持</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {supportedPlatforms.map((platform, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-40"
                        >
                            <div className="text-5xl mb-4">{platform.icon}</div>
                            <h3 className="text-lg font-semibold">{platform.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* 核心功能展示 */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-10">核心功能</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 技术详情 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-3xl font-bold mb-6">技术优势</h2>
                    <ul className="space-y-4">
                        {technicalAdvantages.map((advantage, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">✓</span>
                                <span className="text-lg">{advantage}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">为什么选择我们的智能客服？</h3>
                    <div className="space-y-4">
                        <p className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <span>降低客服成本，提升服务效率</span>
                        </p>
                        <p className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <span>全天候服务，不遗漏任何客户咨询</span>
                        </p>
                        <p className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <span>智能学习能力，持续优化问答质量</span>
                        </p>
                        <p className="flex items-start">
                            <span className="font-bold mr-2">•</span>
                            <span>无缝集成现有业务系统</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col text-center py-12 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl text-white">
                <h2 className="text-3xl font-bold mb-4">开启智能客服新时代</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    立即体验我们的智能客服系统，提升客户满意度和服务效率
                </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {
                            jumpUrl && jumpUrl.length > 0 ? <a href={jumpUrl} target="_blank" className="px-8 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                                {jumpText ?? ''}
                            </a> : null
                        }
                        <a href="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors">
                            联系我们
                        </a>
                    </div>
            </div>
        </div>
    );
}