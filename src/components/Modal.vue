<template>
  <div :style="{ display: 'flex', justifyContent: 'space-between' }">
    <router-link to="timePicker">TimePicker</router-link>
  </div>
  <a-button
    type="primary"
    @click="showModal"
    :style="{ alignSelf: 'center', marginTop: '50px' }"
    size="large"
    >Modal</a-button
  >
  <a-modal
    v-model:visible="visible"
    title="Modal"
    ok-text="确认"
    cancel-text="取消"
    @ok="hideModal"
  >
    <p>Youhouuuuuuu je fais des boutons en Chinois !</p>
  </a-modal>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const visible = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};
const hideModal = () => {
  visible.value = false;
};
</script>
