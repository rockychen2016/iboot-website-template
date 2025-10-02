'use client';

export default function DetailRagKnowledgeBase({
    jumpText,
    jumpUrl
}: Readonly<{
    jumpUrl?: string,
    jumpText?: string,
}>) {
    // 产品特性
    const productFeatures = [
        {
            title: "AI驱动",
            description: "基于先进的人工智能技术，实现智能知识管理和问答",
            icon: "🤖",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "本地部署",
            description: "支持本地化部署，确保数据安全和隐私保护",
            icon: "🔒",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "检索增强",
            description: "基于RAG技术，提升知识检索准确性和生成效率",
            icon: "🔍",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "易于管理",
            description: "直观的管理界面，轻松维护知识库内容",
            icon: "⚙️",
            color: "from-orange-500 to-amber-500"
        }
    ];

    // 应用场景
    const applicationScenarios = [
        {
            title: "企业知识管理",
            description: "构建企业内部知识库，提升员工学习和工作效率"
        },
        {
            title: "智能客服",
            description: "为客服系统提供准确的知识支持，提升服务质量"
        },
        {
            title: "教育培训",
            description: "构建智能教学助手，提供个性化学习支持"
        },
        {
            title: "技术支持",
            description: "快速响应技术问题，提供准确的解决方案"
        }
    ];

    // 技术架构
    const technicalArchitecture = [
        "大语言模型引擎",
        "向量数据库",
        "检索增强生成(RAG)",
        "自然语言处理",
        "知识图谱技术",
        "多模态数据处理"
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
                            <h2 className="text-3xl font-bold mb-6">先进技术架构</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                基于前沿AI技术构建，融合多种先进技术，确保系统性能和效果
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
                                            <h3 className="font-bold">知识录入</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">多格式文档自动解析和向量化</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300 mr-4">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="font-bold">智能检索</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">基于语义的相似度匹配和检索</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 mr-4">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="font-bold">内容生成</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">基于RAG的精准答案生成</p>
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
                    <h2 className="text-3xl font-bold mb-4">开启智能知识管理新时代</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        立即体验RAG知识库管理系统，提升企业知识利用效率
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