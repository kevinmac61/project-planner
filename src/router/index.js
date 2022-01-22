import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddProject from "../views/AddProject"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProject,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
