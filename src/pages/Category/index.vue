<template>
  <div class="category">
    <!-- 左侧栏 -->
    <div class="sideBar">
      <van-sidebar v-model="active" class="sideBarItem" route>
        <van-sidebar-item title="新品推荐" to="/category/new"></van-sidebar-item>
        <van-sidebar-item title="热卖推荐" to="/category/hot"></van-sidebar-item>
        <van-sidebar-item title="动物玩伴" to="/category/animal"></van-sidebar-item>
        <van-sidebar-item title="趣味玩伴" to="/category/like"></van-sidebar-item>
        <van-sidebar-item title="精巧搭配" to="/category/match"></van-sidebar-item>
        <van-sidebar-item title="婴幼儿陪伴" to="/category/child"></van-sidebar-item>
        <van-sidebar-item title="儿童读物" to="/category/read"></van-sidebar-item>
        <van-sidebar-item title="礼赠心选" to="/category/gift"></van-sidebar-item>
        <van-sidebar-item title="个性化定制" to="/category/made"></van-sidebar-item>
      </van-sidebar>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { createApp, ref, watch } from 'vue'
import { Sidebar, SidebarItem } from 'vant'
import { useRoute } from 'vue-router'

const app = createApp()
app.use(Sidebar)
app.use(SidebarItem)

export default {
  name: 'Category',

  setup() {
    const active = ref(0)
    const route = useRoute()
    return {
      active,
      route
    }
  }
}
</script>

<style scoped lang="scss">
.category {
  display: flex;
  //  侧边栏
  .sideBar {
    width: 200px;
    // height: 1461px;
    height: calc(100vh - 120px);

    :deep(.van-sidebar) {
      height: 100% !important;
      // height: calc(100vh - 120px);
      // position: fixed;
      // top: 0;
      // left: 0;
      // z-index: 1111;
      width: 188px;
      height: 1461px;
      --van-sidebar-background: rgb(248, 248, 248);
      --van-sidebar-selected-background: rgb(0, 194, 222);
      --van-sidebar-selected-border-color: rgba(0, 0, 0, 0);
      --van-sidebar-font-weight: 700;
      --van-sidebar-selected-font-weight: 700;
      --van-sidebar-line-height: 50px;
      --van-sidebar-font-size: 28px;
      // --van-sidebar-padding:10px;
      --van-sidebar-text-algin: center;
      .van-sidebar-item {
        width: 188px;
        height: 120px;
      }
    }
  }
  .content {
    flex: 1;
  }
}
</style>
