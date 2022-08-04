import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthService from "@/services/AuthService";

Vue.use(VueRouter);

function guardMyroute(to, from, next) {
  if (AuthService.isAuth()) {
    next(); // allow to enter route
  } else {
    next("/login"); // go to '/login';
  }
}

function guardForAuthenticatedUser(to, from, next) {
  if (!AuthService.isAuth()) {
    next(); // allow to enter route
  } else {
    next("/user/dashboard"); // go to '/login';
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: guardForAuthenticatedUser,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    beforeEnter: guardForAuthenticatedUser,
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
    path: "/reset-password",
    name: "resetpassword",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PasswordForgetView.vue"),
  },
  {
    path: "/user/dashboard",
    name: "user.dashboard",
    beforeEnter: guardMyroute,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/DashboardView.vue"),
  },
  {
    path: "/user/settings",
    name: "user.settings",
    beforeEnter: guardMyroute,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/SettingView.vue"),
  },
  {
    path: "/user/sandbox",
    name: "user.sandbox",
    beforeEnter: guardMyroute,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/SandBoxView.vue"),
  },
  {
    path: "*",
    name: "catchAll",
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
