import ContactBanner from "@/components/contact-banner";

export default function DetailWxWork() {
    // 企业微信开发特色内容数据（模拟）
    const wechatWorkFeatures = [
        {
            title: "高效协同",
            description: "无缝集成企业内部系统，提升团队协作效率",
            icon: "🤝"
        },
        {
            title: "安全可靠",
            description: "企业级数据安全保障，符合各类合规要求",
            icon: "🔒"
        },
        {
            title: "开放生态",
            description: "丰富的API接口，轻松对接各类业务系统",
            icon: "🌐"
        },
        {
            title: "统一管理",
            description: "集中管理组织架构和权限，降低管理成本",
            icon: "🏢"
        }
    ];

    // 企业微信功能模块
    const wxWorkModules = [
        {
            title: "审批应用",
            description: "自定义审批流程，实现无纸化办公"
        },
        {
            title: "日程管理",
            description: "团队日程共享，会议安排更便捷"
        },
        {
            title: "公告通知",
            description: "重要信息及时推送，确保信息传达到位"
        },
        {
            title: "任务协作",
            description: "项目任务分配跟踪，提高执行效率"
        },
        {
            title: "客户联系",
            description: "客户信息管理，连接企业微信客户"
        },
        {
            title: "汇报系统",
            description: "定期工作汇报，便于管理层了解进展"
        }
    ];

    return (
        <>
            {/* 特色介绍部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">企业微信应用开发优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 dark:px-0">
                    {wechatWorkFeatures.map((feature, index) => (
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
                    {wxWorkModules.map((module, index) => (
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
                            统一身份认证
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            与企业组织架构深度集成，实现单点登录和统一权限管理。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">2</span>
                            灵活部署方式
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            支持私有化部署和混合部署，满足不同企业的安全要求。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">3</span>
                            强大集成能力
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            提供丰富的API和SDK，可快速集成OA、CRM、ERP等企业系统。
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <ContactBanner title="开始您的企业微信项目" description="立即联系我们，获取专业的企业微信开发服务，助力您的工作效率提升!" />
            </div>
        </>
    )
}