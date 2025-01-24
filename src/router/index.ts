import CheckoutPageVue from "@/views/CheckoutPage.vue";
import Exercise1Vue from "@/views/Exercise1.vue";
import Exercise2Vue from "@/views/Exercise2.vue";
import Exercise3Vue from "@/views/Exercise3.vue";
import Exercise4Vue from "@/views/Exercise4.vue";
import Exercise5Vue from "@/views/Exercise5.vue";
import Exercise6Vue from "@/views/Exercise6.vue";
import Exercise7Vue from "@/views/Exercise7.vue";
import Exercise8Vue from "@/views/Exercise8.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Exercise1Vue,
    },
    {
      path: "/exercise-2",
      component: Exercise2Vue,
    },
    {
      path: "/exercise-3",
      component: Exercise3Vue,
    },
    {
      path: "/exercise-4",
      component: Exercise4Vue,
    },
    {
      path: "/exercise-5",
      component: Exercise5Vue,
    },
    {
      path: "/exercise-6",
      component: Exercise6Vue,
    },
    {
      path: "/exercise-7",
      component: Exercise7Vue,
    },
    {
      path: "/exercise-8",
      component: Exercise8Vue,
    },
    {
      path: "/checkout",
      component: CheckoutPageVue,
    },
  ],
});

export default router;
