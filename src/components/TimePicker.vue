<template>
  <div :style="{ display: 'flex', justifyContent: 'space-between' }">
    <router-link to="upload">Upload</router-link>
    <router-link to="modal">Modal</router-link>
  </div>
  <a-time-picker
    v-model:value="timeFrom"
    valueFormat="HH:mm:ss"
    :style="{
      width: '120px',
      alignSelf: 'center',
      marginBottom: '20px',
      marginTop: '40px',
    }"
  />
  <a-time-picker
    v-model:value="timeTo"
    valueFormat="HH:mm:ss"
    :style="{ width: '120px', alignSelf: 'center', marginBottom: '20px' }"
  />
  <div :style="{ alignSelf: 'center', marginTop: '20px' }">
    Set duration from {{ timeFrom }} to {{ timeTo }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const timeFrom = ref<string>("09:00:00");
const timeTo = ref<string>("09:00:00");
</script>
