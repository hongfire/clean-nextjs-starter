// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',     // 确保 Tailwind 处理 pages 目录下的文件
    './components/**/*.{js,ts,jsx,tsx}', // 确保 Tailwind 处理 components 目录下的文件
    './app/**/*.{js,ts,jsx,tsx}',        // 确保 Tailwind 处理 app 目录下的文件
  ],
  theme: {
    extend: {
      colors: {
        // 根据需要扩展你的颜色配置
      },
    },
  },
  plugins: [],
}
