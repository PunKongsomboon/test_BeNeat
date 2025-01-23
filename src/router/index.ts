import Exercise1Vue from "@/views/Exercise1.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "exerciseOne",
      component: Exercise1Vue,
    },
  ],
});

export default router;
