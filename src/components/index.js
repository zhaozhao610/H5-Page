import { Button } from 'vant'
import { cart } from '@/components/vants/cart.js'
import { category } from '@/components/vants/category.js'
import { home } from '@/components/vants/home.js'
import { my } from '@/components/vants/my.js'
import { Tabbar, TabbarItem } from 'vant'
import { createApp } from 'vue'
import App from '@/App.vue'

const app =createApp(App)


// 将需要批量注册的组件放到一个数组中
const components = new Set([
  Button,
  Tabbar,
  TabbarItem,
  ...cart,
  ...category,
  ...home,
  ...my,
])



const install = function (app, options = {}) {
  components.forEach(component => {
    app.component(options.name || component.name, component);
  });
}


if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;