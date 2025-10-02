'use client';

export default function DetailCms({
    jumpUrl,
    jumpText
}: Readonly<{
    jumpUrl?: string,
    jumpText?: string,
}>) {
    // 产品特性
    const productFeatures = [
        {
            title: "多类型内容",
            description: "支持图文、产品、视频、下载、相册等多种内容类型",
            icon: "📄",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "微信生态对接",
            description: "无缝对接微信公众号，方便内容分发和用户互动",
            icon: "💬",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "广泛应用",
            description: "适用于电商购物、知识付费、企业网站等多种场景",
            icon: "🌐",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "开放接口",
            description: "提供标准API接口，可作为小程序、APP等应用后端",
            icon: "🔌",
            color: "from-orange-500 to-amber-500"
        }
    ];

    // 应用场景
    const applicationScenarios = [
        {
            title: "电商购物",
            description: "构建在线商城，管理商品信息和订单流程"
        },
        {
            title: "知识付费",
            description: "搭建知识分享平台，实现内容变现"
        },
        {
            title: "企业网站",
            description: "建设专业的企业官网，展示品牌形象"
        },
        {
            title: "会员管理",
            description: "完善的会员体系，提升用户粘性与活跃度"
        }
    ];

    // 技术架构
    const technicalArchitecture = [
        "响应式设计",
        "模块化内容管理",
        "多终端适配",
        "微信生态集成",
        "RESTful API接口",
        "权限管理系统"
    ];

    return (
        <div>

            {/* 产品特性 */}
            <div className="mx-auto p-6 mb-20 shadow-2xl rounded-2xl dark:bg-gray-900">
                <h2 className="text-3xl font-bold text-center mb-16">核心特性</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col items-center dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                        >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-2xl mb-6`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 技术架构 */}
            <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-16 mb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">技术架构</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                基于现代化Web技术构建，确保系统的稳定性和扩展性
                            </p>
                            <ul className="space-y-4">
                                {technicalArchitecture.map((tech, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 mr-3">
                                            ✓
                                        </span>
                                        <span className="font-medium">{tech}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 mr-4">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="font-bold">内容管理</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">灵活的内容发布和管理机制</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300 mr-4">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="font-bold">微信集成</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">无缝对接微信公众号生态系统</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 mr-4">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="font-bold">开放接口</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">提供标准API供小程序、APP调用</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 应用场景 */}
            <div className="mx-auto rounded-2xl p-6 mb-20 bg-gray-100 dark:bg-gray-900">
                <h2 className="text-3xl font-bold text-center mb-16">应用场景</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {applicationScenarios.map((scenario, index) => (
                        <div
                            key={index}
                            className="flex p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                        >
                            <div className="mr-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl">
                                    {index + 1}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{scenario.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mx-auto text-center pb-12">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">选择iBootCMS内容管理系统</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        构建您的数字化内容平台，一站式解决内容管理需求
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
        </div>
    );
}