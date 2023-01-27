import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(Antd);

app.mount("#app");
