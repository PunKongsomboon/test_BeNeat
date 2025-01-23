import Exercise1Vue from "@/views/Exercise1.vue";
import Exercise2Vue from "@/views/Exercise2.vue";
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
    {
      path: "/exercise-2",
      name: "exerciseTwo",
      component: Exercise2Vue,
    },
  ],
});

export default router;
