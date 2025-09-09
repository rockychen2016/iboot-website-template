import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
  /**
   * 生产环境下，Next.js 会将应用编译成静态文件和服务器端渲染的页面。
   * 这使得应用可以在任何支持 Node.js 的服务器上运行。
   * output: "standalone" 模式下，Next.js 会生成一个自包含的独立服务器文件（server.js），而不是依赖完整的 .next 文件夹结构。
   * node .next/standalone/server.js
   * 这对于部署到云平台或容器化环境非常有用，因为它减少了部署包的大小和复杂性。
   * 
   */
  output: 'standalone',
  experimental: {
    useCache: true
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
