import Exercise1Vue from "@/views/Exercise1.vue";
import Exercise2Vue from "@/views/Exercise2.vue";
import Exercise3Vue from "@/views/Exercise3.vue";
import Exercise4Vue from "@/views/Exercise4.vue";
import Exercise5Vue from "@/views/Exercise5.vue";
import Exercise6Vue from "@/views/Exercise6.vue";
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
    {
      path: "/exercise-3",
      name: "exerciseThree",
      component: Exercise3Vue,
    },
    {
      path: "/exercise-4",
      name: "exerciseFour",
      component: Exercise4Vue,
    },
    {
      path: "/exercise-5",
      name: "exerciseFive",
      component: Exercise5Vue,
    },
    {
      path: "/exercise-6",
      name: "exerciseSix",
      component: Exercise6Vue,
    },
  ],
});

export default router;
