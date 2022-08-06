import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue"
import AuthService from "@/services/AuthService";
import SandboxLayout from '@/layout/SandboxLayout'
import CustomerComponent from '@/components/CustomerComponent'
import PurchaseComponent from '@/components/PurchaseComponent'
import ArticleComponent from '@/components/ArticleComponent'
import TransactionDetail from '@/components/TransactionDetail'
import TransactionComponent from '@/components/TransactionComponent'
import FormCustomer from '@/components/FormCustomer'

Vue.use(VueRouter);

function guardMyroute(to, from, next) {
  if (AuthService.isAuth()) {
    next(); 
  } else {
    next("/login"); 
  }
}

function guardForAuthenticatedUser(to, from, next) {
  if (!AuthService.isAuth()) {
    next(); 
  } else {
    next("/user/sandbox"); 
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: guardForAuthenticatedUser,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/user/sandbox",
    beforeEnter: guardMyroute,
    component: SandboxLayout,
    name:"sandbox",
    children: [
      {
        path: "",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/auth/SandBoxView.vue"),
      },
      {
        path: "customers",
        component: CustomerComponent,
        name:"customers"
      },
      {
        path: "customers/create",
        component: FormCustomer
      },
      {
        path: "customers/:id/transactions",
        component: TransactionComponent
      },
      {
        path: "purchase",
        component: PurchaseComponent,
        name:"purchase"
      },
      {
        path: "purchase/:id/articles",
        component: ArticleComponent,
      },
      {
        path: "purchase/:customerId/transactions/:transactionId",
        component: TransactionDetail,
        props: {
          default: true,
        },
      }
    ]
  },
  {
    path: "*",
    name: "catchAll",
    component: SandboxLayout,
    beforeEnter: guardForAuthenticatedUser,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
