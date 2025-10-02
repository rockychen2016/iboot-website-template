import ContactBanner from "@/components/contact-banner";

export default function DetailLlm() {
    // 大语言模型开发特色内容数据
    const llmDevelopmentFeatures = [
        {
            title: "智能对话",
            description: "自然语言理解和生成，实现拟人化智能交互",
            icon: "💬"
        },
        {
            title: "多模态支持",
            description: "支持文本、图像、语音等多种数据类型处理",
            icon: "🧠"
        },
        {
            title: "灵活部署",
            description: "支持本地化部署或云端API调用，满足不同需求",
            icon: "⚙️"
        },
        {
            title: "持续学习",
            description: "基于反馈持续优化模型，不断提升服务质量",
            icon: "📈"
        }
    ];

    // 应用场景
    const llmApplicationScenarios = [
        {
            title: "全平台智能客服",
            description: "覆盖网站、公众号、小程序、APP、抖音等平台的智能客服系统"
        },
        {
            title: "内容自动生成",
            description: "文章、营销文案、社交媒体内容等文本内容自动生成"
        },
        {
            title: "多媒体内容处理",
            description: "图像描述、视频摘要、多模态内容理解与生成"
        },
        {
            title: "RAG知识库系统",
            description: "基于检索增强生成的知识库问答系统，确保回答准确性"
        },
        {
            title: "智能数据分析",
            description: "从海量文本数据中提取洞察，辅助决策制定"
        },
        {
            title: "个性化推荐",
            description: "基于用户行为和偏好，提供个性化内容推荐"
        }
    ];

    return (
        <>
            {/* 特色介绍部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">大语言模型应用开发优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 dark:px-0">
                    {llmDevelopmentFeatures.map((feature, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 应用场景部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">应用场景</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 dark:px-0">
                    {llmApplicationScenarios.map((scenario, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">{scenario.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{scenario.description}</p>
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
                            多模型支持
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            支持国内外主流大语言模型，可根据需求灵活选择和切换。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">2</span>
                            RAG增强检索
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            结合检索增强生成技术，确保生成内容的准确性和时效性。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">3</span>
                            安全可控
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            支持本地化部署，数据隐私有保障，满足企业安全合规要求。
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <ContactBanner title="开始您的LLM项目" description="立即联系我们，获取专家级的咨询与开发服务，打造您企业专属的LLM应用，提升工作效率!" />
            </div>
        </>
    )
}