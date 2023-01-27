<template>
  <div :style="{ display: 'flex', justifyContent: 'center' }">
    <a href="https://www.linkedin.com/in/yaneoweb/" target="_blank">
      <a-card hoverable style="width: 240px">
        <template #cover>
          <img
            alt="example"
            src="https://res.cloudinary.com/apprenantv1-repo1/image/upload/v1674825918/moi_dxlw8y.jpg"
          />
        </template>
        <a-card-meta title="Yann Froment">
          <ThunderboltOutlined :style="{ fontSize: '30px' }" />
          <template #description>yann.froment@gmail.com</template>
        </a-card-meta>
      </a-card>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ThunderboltOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}
</style>
