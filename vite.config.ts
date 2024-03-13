import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
// Mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default ({ command }: { command: string }) => {
  return {
    plugins: [vue(),
      viteMockServe({
        enable: command === 'serve', // 使用 'enable' 替代 'mock'
      }),
      // createSvgIconsPlugin({
      //   // 指定要缓存的图标文件夹
      //   iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      //   // 指定 symbolId 格式
      //   symbolId: 'icon-[dir]-[name]',
      // }),
      
    ],

    resolve: {
      alias: {
        '@': './src', // 相对路径别名配置，使用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
};
