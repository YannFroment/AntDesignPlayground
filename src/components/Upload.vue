<template>
  <div :style="{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }">
    <router-link to="table">Table</router-link>
    <router-link to="timePicker">TimePicker</router-link>
  </div>
  <a-upload
    action="https://file.io"
    list-type="picture"
    v-model:file-list="fileList"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      upload
    </a-button>
  </a-upload>
</template>
<script lang="ts" setup>
import { UploadOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  thumbUrl?: string;
}

const fileList = ref<FileItem[]>([
  {
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
]);
</script>

<style scoped>
/* tile uploaded pictures */
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline :deep(.ant-upload-animate-enter) {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline :deep(.ant-upload-animate-leave) {
  animation-name: uploadAnimateInlineOut;
}
</style>
