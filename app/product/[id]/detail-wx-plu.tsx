import ContactBanner from "@/components/contact-banner";

export default function DetailWxPlu() {
    // 微信公众号开发特色内容数据（模拟）
    const wechatOfficialAccountFeatures = [
        {
            title: "精准营销",
            description: "通过用户画像和行为分析，实现个性化推送和精准营销",
            icon: "🎯"
        },
        {
            title: "互动性强",
            description: "支持多种消息类型和自定义菜单，提升用户参与度",
            icon: "💬"
        },
        {
            title: "易于维护",
            description: "云端部署，免安装更新，降低运维成本",
            icon: "⚙️"
        },
        {
            title: "数据统计",
            description: "完善的数据分析系统，实时监控运营效果",
            icon: "📊"
        }
    ];

    // 微信公众号功能模块
    const wxPluginModules = [
        {
            title: "自动回复系统",
            description: "关键词自动回复、关注欢迎语、常用问题解答"
        },
        {
            title: "菜单管理系统",
            description: "自定义菜单栏，一键跳转至相应功能或页面"
        },
        {
            title: "用户管理体系",
            description: "粉丝分组管理、标签设置、用户行为追踪"
        },
        {
            title: "数据分析中心",
            description: "用户增长、消息分析、接口分析等多维度报表"
        },
        {
            title: "营销活动工具",
            description: "优惠券、抽奖、投票、调研等多种营销插件"
        },
        {
            title: "电商集成系统",
            description: "商品展示、购物车、在线支付、订单管理等功能"
        }
    ];

    return (
        <>
            {/* 特色介绍部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">微信公众号开发优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 dark:px-0">
                    {wechatOfficialAccountFeatures.map((feature, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 功能模块部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">核心功能模块</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 dark:px-0">
                    {wxPluginModules.map((module, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">{module.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{module.description}</p>
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
                            多样化消息支持
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            支持文本、图片、语音、视频、图文等多种消息类型，满足不同场景需求。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">2</span>
                            强大的扩展能力
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            支持第三方平台接入，可轻松集成支付、地图、客服等扩展功能。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">3</span>
                            完善的安全机制
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            提供Token验证、消息加密等安全机制，保障数据传输安全可靠。
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <ContactBanner title="开始您的微信公众号项目" description="立即联系我们，获取专业的微信公众号开发服务，助力您的业务增长" />
            </div>
        </>
    )
}