import ContactBanner from "@/components/contact-banner";

export default function DetailMiniPro() {
    // 微信小程序开发特色内容数据（模拟）
    const wechatMiniProgramFeatures = [
        {
            title: "跨平台兼容",
            description: "一次开发，多端运行，支持iOS、Android、小程序等多个平台",
            icon: "📱"
        },
        {
            title: "快速迭代",
            description: "敏捷开发模式，快速响应市场需求变化",
            icon: "⚡"
        },
        {
            title: "用户体验优化",
            description: "原生体验，流畅交互，提升用户满意度",
            icon: "✨"
        },
        {
            title: "成本效益",
            description: "相比原生应用开发，显著降低开发和维护成本",
            icon: "💰"
        }
    ];
    return (
        <>
            {/* 特色介绍部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">为什么选择微信小程序</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 dark:px-0">
                    {wechatMiniProgramFeatures.map((feature, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
                            原生性能体验
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            接近原生APP的性能表现，提供流畅的用户体验，支持离线操作和本地存储。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">2</span>
                            丰富的API支持
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            支持扫码、支付、地图、摄像头等丰富原生API，满足各种业务场景需求。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">3</span>
                            易于推广传播
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            基于微信生态，易于分享传播，可与公众号、微信群无缝连接。
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <ContactBanner title="开始您的小程序项目" description="立即联系我们，获取专业的微信小程序开发服务，助力您的业务增长" />
            </div>
        </>
    )
}