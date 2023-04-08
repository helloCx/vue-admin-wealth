<template>
  <a-layout-sider class="w-side-layout">
    <a-menu>

    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" name="MenuLayout" setup>
import {onMounted} from "vue";
import {MenuService} from "@/api/menu/MenuService";

onMounted(async ()=>{
  let menuService = new MenuService();
  const res = await menuService.getMenu();
  console.log(res);
})
</script>

<style scoped>

</style>