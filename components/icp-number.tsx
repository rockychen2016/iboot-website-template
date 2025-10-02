'use client'

import { useCurWebsiteContext } from "@/providers/website-provider";
import { Link } from "@heroui/link"


export default function IcpNumber({
    linkColor = "text-white"
}: Readonly<{
    linkColor?: string
}>) {
    const { icpNumber } = useCurWebsiteContext();
    return (
        (icpNumber && icpNumber.length > 0) ? <Link
            size="sm"
            isExternal
            className="text-current"
            href="https://beian.miit.gov.cn/"
            title="中国工信部ICP备案查询"
            target="_blank"
        >
            <span>ICP:</span>
            <p className={linkColor}>{icpNumber}</p>
        </Link> : <></>
    )
}