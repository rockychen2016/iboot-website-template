export default function DetailFrontendCooperation() {
    // 前端技术栈
    const frontendTechnologies = [
        { name: "Vue.js", level: 95 },
        { name: "React", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "uni-app", level: 80 },
        { name: "jQuery", level: 75 }
    ];

    // 服务优势
    const serviceAdvantages = [
        {
            icon: "👥",
            title: "专业团队",
            description: "经验丰富的前端开发团队，具备多种技术栈实战经验"
        },
        {
            icon: "⚡",
            title: "快速响应",
            description: "敏捷开发流程，快速响应项目需求变化"
        },
        {
            icon: "🔄",
            title: "灵活合作",
            description: "支持项目外包、技术合作、人员派驻等多种合作模式"
        },
        {
            icon: "🎯",
            title: "质量保证",
            description: "严格的代码审查和测试流程，确保交付质量"
        }
    ];

    return (
        <div className="space-y-12">
            {/* 技术栈展示 */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-2 text-center">技术栈能力</h2>
                <p className="text-center mb-8 text-purple-100">我们擅长的前端技术，为您的项目提供全方位技术支持</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {frontendTechnologies.map((tech, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                            <h3 className="text-xl font-bold mb-4">{tech.name}</h3>
                            <div className="w-full bg-white/20 rounded-full h-2.5 mb-2">
                                <div 
                                    className="bg-white h-2.5 rounded-full" 
                                    style={{ width: `${tech.level}%` }}
                                ></div>
                            </div>
                            <span className="text-sm">{tech.level}% proficiency</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 服务优势 */}
            <div>
                <h2 className="text-3xl font-bold mb-8 text-center">服务优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {serviceAdvantages.map((advantage, index) => (
                        <div 
                            key={index} 
                            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-4xl mb-4">{advantage.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 合作模式 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-8 text-center">合作模式</h2>
                <div className="flex flex-col md:flex-row gap-8 px-6">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">项目外包</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            我们提供完整的前端项目开发服务，从需求分析、UI实现到测试部署，全程负责项目交付。
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                                <span>完整的项目生命周期管理</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                                <span>按时按质交付项目成果</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                                <span>提供技术文档和维护支持</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">技术支持</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            为缺乏前端技术团队的企业提供专业技术支持，包括人员派驻、技术咨询等服务。
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                                <span>资深前端工程师派驻</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                                <span>技术难题攻关支持</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                                <span>团队技术培训服务</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 适用场景 */}
            <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">适用场景</h2>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
                    无论您是初创公司还是大型企业，我们都能提供合适的前端技术解决方案
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <div className="text-3xl mb-4">🚀</div>
                        <h3 className="text-xl font-bold mb-2">初创公司</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            缺乏技术团队，需要完整的前端开发服务
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <div className="text-3xl mb-4">🏢</div>
                        <h3 className="text-xl font-bold mb-2">传统企业</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            需要数字化转型，构建现代化Web应用
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <div className="text-3xl mb-4">🔧</div>
                        <h3 className="text-xl font-bold mb-2">技术团队</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            需要补充前端开发资源或特定技术专家
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}