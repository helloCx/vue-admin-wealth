<template>
  <a-layout class="w-main-layout">
    <side-layout></side-layout>
    <a-layout>
      <header-layout></header-layout>
      <content-layout>
        <router-view></router-view>
      </content-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" name="MainLayout" setup>
import SideLayout from "@/layouts/SideLayout/SideLayout.vue";
import ContentLayout from "@/layouts/ContentLayout.vue";
import HeaderLayout from "@/layouts/HeaderLayout.vue";
</script>

<style scoped>
.w-main-layout {
  display: flex;
  height: 100%;
}
</style>