import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // 省略文件扩展名
    extensions: ['.js', '.json', '.ts', '.vue', '.jsx', '.tsx'],
  },
  server: {
    host: '0.0.0.0',
    port: 5020,
    open: true, // 自动打开浏览器
    proxy: {
      '/api': {
        // target: "8.130.105.213", // 代理目标的基础路径
        target: 'https://hotapi.xinjudata.com', // 代理目标的基础路径
        changeOrigin: true, // 允许跨域,
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径: 去掉路径中开头的
      },
    }, // 代理配置
  },
})
