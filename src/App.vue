<script setup lang="ts">
import { ref } from "vue";
import { routes } from "./router";
import { useRouter } from "vue-router";

const router = useRouter();

let selectedKeys = ref<number[]>([0]);
</script>

<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item
          v-for="(route, i) in routes"
          :key="i"
          @click="router.push(route.path)"
          >{{ route.breadcrumbName }}</a-menu-item
        >
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div
        :style="{
          background: '#fff',
          padding: '24px',
          minHeight: '380px',
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
        }"
      >
        <RouterView />
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style>
body {
  background-color: #f0f2f5;
}
</style>
