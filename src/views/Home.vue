<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <a-typography-title>Ant Design Vue Playground</a-typography-title>
  <router-link
    v-if="router.currentRoute.value.path === '/'"
    to="/transfer"
    :style="{ alignSelf: 'center', marginTop: '80px' }"
  >
    <a-button type="primary" size="large"> Begin Playground </a-button>
  </router-link>
  <router-view></router-view>
</template>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
