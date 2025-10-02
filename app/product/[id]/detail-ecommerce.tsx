import ContactBanner from "@/components/contact-banner";

export default function DetailEcommerce() {
    // 电商网站开发特色内容数据
    const ecommerceFeatures = [
        {
            title: "多端一体化",
            description: "一次开发，全平台支持，覆盖PC、移动端等所有用户触点",
            icon: "💻"
        },
        {
            title: "降本增效",
            description: "标准化开发流程，显著降低开发成本和周期",
            icon: "💰"
        },
        {
            title: "功能完善",
            description: "涵盖电商全链路功能，满足各类业务需求",
            icon: "🔧"
        },
        {
            title: "易于扩展",
            description: "模块化架构设计，便于功能扩展和定制开发",
            icon: "📈"
        }
    ];

    // 核心功能模块
    const coreFeatures = [
        {
            title: "商品管理系统",
            description: "完整的商品信息管理，包括分类、属性、库存等"
        },
        {
            title: "订单处理系统",
            description: "全流程订单管理，从下单到完成的一体化处理"
        },
        {
            title: "支付集成系统",
            description: "支持多种支付方式，确保交易安全便捷"
        },
        {
            title: "物流集成系统",
            description: "无缝对接主流物流平台，实时跟踪配送状态"
        },
        {
            title: "营销推广工具",
            description: "优惠券、满减、拼团等多种营销活动支持"
        },
        {
            title: "数据分析中心",
            description: "全面的数据统计和分析，辅助经营决策"
        }
    ];

    return (
        <>
            {/* 特色介绍部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">电商网站开发优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 dark:px-0">
                    {ecommerceFeatures.map((feature, index) => (
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
                            采用现代化技术栈，支持高并发访问和快速响应，确保用户体验。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">2</span>
                            安全可靠
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            多重安全防护机制，保障用户数据和交易安全，符合行业标准。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">3</span>
                            灵活部署
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            支持云部署和本地部署，可根据业务需求灵活选择部署方式。
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <ContactBanner title="开始您的电商网站项目" description="立即联系我们，获取专家级的咨询与开发服务，助力您业务增长" />
            </div>
        </>
    )
}