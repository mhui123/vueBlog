import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import MainPage from './components/MainPage.vue';
import Detail from './components/Detail.vue';
import Error from './components/Error.vue';
const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: MainPage,
  },
  {
    path:"/detail/:id(\\d+)",
    name:"detail",
    component: Detail,
  },
  {
      path:"/:anything(.*)",
      component: Error,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 