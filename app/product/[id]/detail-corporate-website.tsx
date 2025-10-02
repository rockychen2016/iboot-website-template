import ContactBanner from "@/components/contact-banner";

export default function DetailCorporateWebsite() {
    // 企业网站建设特色内容数据
    const corporateWebsiteFeatures = [
        {
            title: "极速上线",
            description: "基于iBootCMS系统，1至3天完成开发并上线",
            icon: "⚡"
        },
        {
            title: "成本优势",
            description: "自研系统大幅降低人天成本，节省预算投入",
            icon: "💰"
        },
        {
            title: "现代化设计",
            description: "紧跟设计潮流，打造专业的企业形象展示平台",
            icon: "🎨"
        },
        {
            title: "多语言支持",
            description: "内置国际化支持，轻松构建多语言企业网站",
            icon: "🌐"
        }
    ];

    // 核心功能模块
    const coreFeatures = [
        {
            title: "企业形象展示",
            description: "全面展示企业文化、发展历程、团队实力等"
        },
        {
            title: "业务信息介绍",
            description: "详细展示企业产品与服务，提升客户认知"
        },
        {
            title: "新闻动态发布",
            description: "实时发布企业资讯，增强品牌传播力"
        },
        {
            title: "在线联系沟通",
            description: "多种联系方式集成，方便客户咨询与反馈"
        },
        {
            title: "SEO优化支持",
            description: "内置搜索引擎优化机制，提升网站搜索排名"
        },
        {
            title: "响应式适配",
            description: "完美适配各种设备，提供一致浏览体验"
        }
    ];

    return (
        <>
            {/* 特色介绍部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">企业网站建设优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 dark:px-0">
                    {corporateWebsiteFeatures.map((feature, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 核心功能模块部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">核心功能模块</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 dark:px-0">
                    {coreFeatures.map((feature, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 技术优势部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">技术优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 dark:px-0">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">1</span>
                            iBootCMS系统
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            基于公司自研的iBootCMS内容管理系统，专为企业网站优化设计。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">2</span>
                            国际化支持
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            内置多语言管理功能，支持一键切换语言，轻松拓展国际市场。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">3</span>
                            灵活扩展
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            模块化设计，支持功能扩展和个性化定制，满足不同企业需求。
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <ContactBanner title="开始您的企业网站建设" description="立即联系我们，获取专家级的咨询与设计开发服务，打造高端的企业形像" />
            </div>
        </>
    )
}