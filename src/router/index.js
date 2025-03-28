// 导入 createRouter 方法创建 Router 实例
// 导入 createWebHistory 方法创建 HTML5 History 模式的路由规则
import { createRouter, createWebHistory } from 'vue-router'

import 'vue-router'

// 导入路由规则
import { staticRoutes } from '@/router/routes.js'
// 创建 Router 实例
const router = createRouter({
  // 创建 HTML5 History 模式的路由规则
  history: createWebHistory(),
  // 挂载使用的路由规则
  routes: staticRoutes,
  // 处理路由的滚动行为，进入一个新页面，都会始终滚动到页面顶部
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

// 导出路由
export default router

