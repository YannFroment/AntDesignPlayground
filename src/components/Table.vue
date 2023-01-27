<template>
  <div
    :style="{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px',
    }"
  >
    <router-link to="list">List</router-link>
    <router-link to="upload">Upload</router-link>
  </div>
  <a-table :data-source="data" :columns="columns">
    <div :style="{ display: 'flex', justifyContent: 'space-between' }">
      <router-link to="list">List</router-link>
      <router-link to="upload">Upload</router-link>
    </div>
    <template
      #filterDropdown="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column,
      }"
    >
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="
            (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
          "
          @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon><SearchOutlined /></template>
          Search
        </a-button>
        <a-button
          size="small"
          style="width: 90px"
          @click="handleReset(clearFilters, confirm)"
        >
          Reset
        </a-button>
      </div>
    </template>
    <template #filterIcon="filtered">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template #customRender="{ text, column }">
      <span v-if="searchText && searchedColumn === column.dataIndex">
        <template
          v-for="(fragment, i) in text
            .toString()
            .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
        >
          <mark
            v-if="fragment.toLowerCase() === searchText.toLowerCase()"
            class="highlight"
            :key="i"
          >
            {{ fragment }}
          </mark>
          <template v-else>{{ fragment }}</template>
        </template>
      </span>
      <template v-else>
        {{ text }}
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { SearchOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

let searchText = ref("");
let searchedColumn = ref("");

const searchInput = ref();

interface Record {
  key: string;
  name: string;
  age: string;
  address: string;
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    slots: {
      filterDropdown: "filterDropdown",
      filterIcon: "filterIcon",
      customRender: "customRender",
    },
    onFilter: (value: string, record: Record) =>
      record.name.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    slots: {
      filterDropdown: "filterDropdown",
      filterIcon: "filterIcon",
      customRender: "customRender",
    },
    onFilter: (value: string, record: Record) =>
      record.age.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    slots: {
      filterDropdown: "filterDropdown",
      filterIcon: "filterIcon",
      customRender: "customRender",
    },
    onFilter: (value: string, record: Record) =>
      record.address.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
];

const handleSearch = (
  selectedKeys: string[],
  confirm: VoidFunction,
  dataIndex: string
) => {
  confirm();
  searchText = ref(selectedKeys[0]);
  searchedColumn = ref(dataIndex);
};

const handleReset = (clearFilters: VoidFunction, confirm: VoidFunction) => {
  console.log(clearFilters);
  console.log(confirm);
  clearFilters();
  searchText = ref("");
  confirm();
};
</script>

<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
