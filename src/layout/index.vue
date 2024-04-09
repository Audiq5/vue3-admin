<template>
  <div class="layout_container">
    <!-- 左侧导航 -->
    <div class="layout_slider">
      <logo></logo>
      <!-- 侧边栏 -->
      <el-scrollbar class="scroll">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <Menu :menuList="userRoutesList"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">{{ userRoutesList }}</div>
    <!-- 内容展示区 -->
    <div class="layout_main"></div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from "vue";
  import logo from "@/layout/components/logo/index.vue";
  import Menu from "@/layout/components/menu/index.vue";
  import { useCounterStore } from "@/store/moudels/user";
  const userRoutesList = useCounterStore().userRoutes;

  onMounted(() => {
    console.log(userRoutesList, "userRoutesList");
  });
</script>

<style scoped lang="scss">
  .layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
      color: white;
      width: $base-menu-width;
      height: 100vh;
      background: $base-menu-background;
      transition: all 0.3s;
    }

    .layout_tabbar {
      position: fixed;
      width: calc(100% - $base-menu-width);
      height: $base-tabbar-height;
      top: 0px;
      left: $base-menu-width;
      transition: all 0.3s;
      background-color: #bfc;

      &.fold {
        width: calc(100vw - $base-menu-min-width);
        left: $base-menu-min-width;
      }
    }

    .layout_main {
      position: absolute;
      width: calc(100% - $base-menu-width);
      height: calc(100vh - $base-tabbar-height);
      left: $base-menu-width;
      top: $base-tabbar-height;
      padding: 20px;
      overflow: auto;
      transition: all 0.3s;

      &.fold {
        width: calc(100vw - $base-menu-min-width);
        left: $base-menu-min-width;
      }
    }
  }
</style>
