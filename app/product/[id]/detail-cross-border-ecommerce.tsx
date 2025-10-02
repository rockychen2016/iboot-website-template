import ContactBanner from "@/components/contact-banner";

export default function DetailCrossBorderEcommerce() {
    // 跨境电商独立站开发特色内容数据
    const crossBorderEcommerceFeatures = [
        {
            title: "多端一体化",
            description: "一次开发，全平台支持，覆盖PC、移动端等所有用户触点",
            icon: "💻"
        },
        {
            title: "全球语言支持",
            description: "支持多语言切换，覆盖全球主要电商市场",
            icon: "🌍"
        },
        {
            title: "卓越SEO优化",
            description: "内置SEO最佳实践，提升搜索引擎排名和曝光率",
            icon: "🔍"
        },
        {
            title: "合规性保障",
            description: "符合GDPR等国际法规要求，确保业务合规运营",
            icon: "📜"
        }
    ];

    // 核心功能模块
    const coreFeatures = [
        {
            title: "智能客服系统",
            description: "7x24小时在线客服，支持多语言自动回复"
        },
        {
            title: "订阅管理系统",
            description: "灵活的订阅机制，支持定期购和会员制营销"
        },
        {
            title: "评论与社区",
            description: "用户评价系统，增强社交互动和购买决策"
        },
        {
            title: "订单管理系统",
            description: "全流程订单管理，从下单到发货一体化处理"
        },
        {
            title: "会员管理体系",
            description: "多层级会员制度，精准营销和用户留存"
        },
        {
            title: "支付与物流集成",
            description: "支持全球主流支付方式和物流跟踪系统"
        }
    ];

    return (
        <>
            {/* 特色介绍部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">跨境电商独立站开发优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 dark:px-0">
                    {crossBorderEcommerceFeatures.map((feature, index) => (
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
                            高性能架构
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            采用现代化前端技术和后端架构，确保网站快速响应和高并发处理能力。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">2</span>
                            全球化部署
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            支持CDN全球加速，多地区服务器部署，确保全球用户访问速度。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">3</span>
                            可扩展设计
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            模块化设计，便于功能扩展和定制化开发，适应业务快速发展需求。
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <ContactBanner title="开始您的跨境独立站项目" description="立即联系我们，获取专家级的咨询与开发服务，助力您跨海业务增长" />
            </div>
        </>
    )
}