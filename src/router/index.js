import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignupView.vue"),
  },
  {
    path: "/docs",
    name: "docs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DocsView.vue"),
  },
  {
    path: "/password-forget",
    name: "password-forget",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PasswordForgetView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/auth/DashboardView.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/auth/DashboardView.vue"
          ),
      },
      {
        path: "settings",
        name: "settings",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/auth/SettingView.vue"
          ),
      },
      {
        path: "sandbox",
        name: "sandbox",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/auth/SandBoxView.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
