import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/H5-Page/',
  plugins: [
    vue()
    // VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: true
  }
  // css:{
  //   postcss:{
  //     plugins:[
  //       postCssPxToRem({
  //         rootValue:37.5, //1rem的大小
  //         propList: ['*']   //需要转换的属性，这里选择全部都进行转换
  //       })
  //     ]
  //   }
  // }
})
