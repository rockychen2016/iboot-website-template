# ===== 阶段1：安装依赖 & 构建 =====
FROM node:22-alpine AS builder
WORKDIR /app

# 复制 package 文件并安装所有依赖（包括 devDependencies）
COPY package.json package-lock.json ./
RUN npm ci

# 复制源码
COPY . .

# 构建应用
RUN npm run build

# ===== 阶段2：生产环境 =====
FROM node:22-alpine
WORKDIR /app

# 设置生产环境变量
ENV NODE_ENV=production

# 从构建阶段复制必要文件
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# 创建非root用户
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# 更改文件所有者
RUN chown -R nextjs:nodejs /app/.next && \
    chown -R nextjs:nodejs /app/public

USER nextjs

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["node", "server.js"]