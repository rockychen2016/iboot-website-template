import ContactBanner from "@/components/contact-banner";

export default function DetailIot() {
    // 物联网开发特色内容数据
    const iotDevelopmentFeatures = [
        {
            title: "万物互联",
            description: "连接各种设备和传感器，构建智能化生态系统",
            icon: "🌐"
        },
        {
            title: "实时监控",
            description: "24小时远程监控设备状态，及时发现问题",
            icon: "👁️"
        },
        {
            title: "数据分析",
            description: "大数据分析，挖掘设备运行规律和优化空间",
            icon: "📊"
        },
        {
            title: "自动化控制",
            description: "智能决策和自动控制，减少人工干预",
            icon: "🤖"
        }
    ];

    // 应用场景案例
    const iotApplicationCases = [
        {
            title: "自助台球厅",
            description: "无人值守台球厅解决方案，包含智能门锁、计费系统、远程监控等功能"
        },
        {
            title: "智能仓库",
            description: "自动化仓储管理系统，实现货物追踪、环境监测、库存预警等功能"
        },
        {
            title: "智慧农业",
            description: "环境监测、自动灌溉、产量预测等农业物联网解决方案"
        },
        {
            title: "智能楼宇",
            description: "楼宇自动化控制系统，涵盖照明、空调、安防等子系统"
        },
        {
            title: "工业4.0",
            description: "智能制造生产线监控，设备预测性维护，生产过程优化"
        },
        {
            title: "智慧交通",
            description: "智能停车系统、交通信号控制、车辆监控管理等解决方案"
        }
    ];

    return (
        <>
            {/* 特色介绍部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">物联网应用开发优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 dark:px-0">
                    {iotDevelopmentFeatures.map((feature, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 应用场景案例部分 */}
            <div className="bg-white dark:bg-black py-6 rounded-xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">应用场景案例</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 dark:px-0">
                    {iotApplicationCases.map((caseItem, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">{caseItem.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{caseItem.description}</p>
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
                            多协议支持
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            支持MQTT、CoAP、HTTP等多种通信协议，适配各类硬件设备。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">2</span>
                            边云协同
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            边缘计算与云计算协同工作，降低延迟，提高系统可靠性。
                        </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2">3</span>
                            安全防护
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            端到端数据加密，设备身份认证，保障系统和数据安全。
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <ContactBanner title="开始您的IOT项目" description="立即联系我们，获取专家级的咨询与开发服务，打造您的IOT应用" />
            </div>
        </>
    )
}