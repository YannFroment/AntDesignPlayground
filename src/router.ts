import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import Transfert from "./components/Transfert.vue";
import List from "./components/List.vue";
import Table from "./components/Table.vue";
import Upload from "./components/Upload.vue";
import TimePicker from "./components/TimePicker.vue";
import Modal from "./components/Modal.vue";

interface Route {
  path: string;
  component: object;
  breadcrumbName: string;
  children?: Array<{
    path: string;
    component: object;
    breadcrumbName: string;
  }>;
}

export const routes: Array<Route> = [
  {
    path: "/",
    component: Home,
    breadcrumbName: "Home",
    children: [
      {
        path: "transfer",
        component: Transfert,
        breadcrumbName: "Transfert",
      },
      {
        path: "list",
        component: List,
        breadcrumbName: "List",
      },
      {
        path: "table",
        component: Table,
        breadcrumbName: "Table",
      },
      {
        path: "upload",
        component: Upload,
        breadcrumbName: "Upload",
      },
      {
        path: "timePicker",
        component: TimePicker,
        breadcrumbName: "TimePicker",
      },
      {
        path: "modal",
        component: Modal,
        breadcrumbName: "Modal",
      },
    ],
  },
  {
    path: "/contact",
    component: Contact,
    breadcrumbName: "Contact",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
