<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path">
          <el-icon><icon-menu /></el-icon>
          <span> {{ item.meta.title }}</span>
        </el-menu-item>
      </template>

      <template v-if="item.children && item.children.length == 1">
        <el-menu-item
          :index="item.children[0].path"
          v-if="!item.children[0].meta.hidden"
        >
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有子路由但是只有一个子路由 -->
      <!-- <template v-if="item.children && item.children.length == 1">
        <el-sub-menu :index="item.path">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <template v-for="itemList in item.children">
            <el-menu-item> {{ itemList.meta.title }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template> -->
      <!-- 有子路由且个数大于一个1 -->

      <el-sub-menu
        v-if="item.children && item.children.length > 1"
        :index="item.path"
      >
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>

<script lang="ts" setup>
  // import Menu from "Menu";
  import { defineProps } from "vue";
  import { Menu as IconMenu, Location } from "@element-plus/icons-vue";
  defineProps(["menuList"]);
</script>
<script lang="ts">
  export default {
    name: "Menu",
  };
</script>
<style lang="scss" scoped></style>
