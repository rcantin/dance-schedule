import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/views/Home.vue";
import Schedule from "@/views/Schedule.vue";
import Classes from "@/views/Classes.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Schedule,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/classes",
    name: "Classes",
    component: Classes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
