<template>
  <div :style="{ display: 'flex', justifyContent: 'space-between' }">
    <router-link to="transfer">Transfer</router-link>
    <router-link to="table">Table</router-link>
  </div>
  <a-list
    class="demo-loadmore-list"
    :style="{ marginTop: '30px' }"
    :loading="loading"
    item-layout="horizontal"
    :data-source="dataList"
  >
    <template #loadMore>
      <div
        :style="{
          textAlign: 'center',
          marginTop: '12px',
          height: '32px',
          lineHeight: '32px',
        }"
      >
        <a-spin v-if="loadingMore" />
        <a-button v-else @click="loadMore">loading more</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name.last }}</a>
          </template>
          <template #avatar>
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
import { useLoadMore } from "vue-request";

const getFakeData = () =>
  `https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo`;

const { dataList, loading, loadingMore, loadMore } = useLoadMore(getFakeData, {
  listKey: "results",
});
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
