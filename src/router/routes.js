// @ts-ignore
import Home from '../pages/HomeView/index.vue'

export const staticRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    // @ts-ignore
    component: () => import('@/pages/Category/index.vue'),
    redirect: '/category/new',
    children: [
      {
        path: 'new',
        // @ts-ignore
        component: () => import('@/pages/Category/CategoryList/New/index.vue')
      },
      {
        path: 'hot',
        // @ts-ignore
        component: () => import('@/pages/Category/CategoryList/Hot/index.vue')
      },
      {
        path: 'animal',
        // @ts-ignore
        component: () => import('@/pages/Category/CategoryList/Animal/index.vue')
      },
      {
        path: 'like',
        // @ts-ignore
        component: () => import('@/pages/Category/CategoryList/Like/index.vue')
      },
      {
        path: 'child',
        // @ts-ignore
        component: () => import('@/pages/Category/CategoryList/Child/index.vue')
      },
      {
        path: 'made',
        // @ts-ignore
        component: () => import('@/pages/Category/CategoryList/Made/index.vue')
      },
      {
        path: 'match',
        // @ts-ignore
        component: () => import('@/pages/Category/CategoryList/Match/index.vue')
      },
      {
        path: 'gift',
        // @ts-ignore
        component: () => import('@/pages/Category/CategoryList/Gift/index.vue')
      },
      {
        path: 'read',
        // @ts-ignore
        component: () => import('@/pages/Category/CategoryList/Read/index.vue')
      }
    ]
  },
  {
    path: '/center',
    // @ts-ignore
    component: () => import('@/pages/Center/index.vue')
  },
  {
    path: '/cart',
    // @ts-ignore
    component: () => import('@/pages/Cart/index.vue')
  },
  {
    path: '/my',
    // @ts-ignore
    component: () => import('@/pages/My/index.vue')
  },
  {
    path: '/detail',
    // @ts-ignore
    component: () => import('@/pages/Detail/index.vue')
  },
  {
    path: '/:id(.*)*',
    name: 'Any',
    redirect: '/404'
  },
  // {
  //   path: '/new',
  //   // @ts-ignore
  //   component: () => import('@/pages/Category/CategoryList/New/index.vue')
  // },
  // {
  //   path: '/hot',
  //   // @ts-ignore
  //   component: () => import('@/pages/Category/CategoryList/Hot/index.vue')
  // },
  // {
  //   path: '/animal',
  //   // @ts-ignore
  //   component: () => import('@/pages/Category/CategoryList/Animal/index.vue')
  // },
  // {
  //   path: '/like',
  //   // @ts-ignore
  //   component: () => import('@/pages/Category/CategoryList/Like/index.vue')
  // },
  // {
  //   path: '/child',
  //   // @ts-ignore
  //   component: () => import('@/pages/Category/CategoryList/Child/index.vue')
  // },
  // {
  //   path: '/made',
  //   // @ts-ignore
  //   component: () => import('@/pages/Category/CategoryList/Made/index.vue')
  // },
  // {
  //   path: '/match',
  //   // @ts-ignore
  //   component: () => import('@/pages/Category/CategoryList/Match/index.vue')
  // },
  // {
  //   path: '/gift',
  //   // @ts-ignore
  //   component: () => import('@/pages/Category/CategoryList/Gift/index.vue')
  // },
  // {
  //   path: '/read',
  //   // @ts-ignore
  //   component: () => import('@/pages/Category/CategoryList/Read/index.vue')
  // },
  {
    path: '/404',
    // @ts-ignore
    component: () => import('@/pages/404/index.vue'),
    meta: {
      hidden: true
    }
  }
]
