import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Toasted from 'vue-toasted';

import "@/assets/css/style.css"
import "@/assets/css/global.css"


Vue.use(Toasted,{
  duration: 1500,
  position: 'top-left', // ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']
  theme: 'outline', // ['toasted-primary', 'outline', 'bubble']
  iconPack: 'fontawesome' // ['material', 'fontawesome', 'mdi', 'custom-class', 'callback']
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
