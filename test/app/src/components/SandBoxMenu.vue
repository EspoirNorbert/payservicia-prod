<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 mt-0 bg-dark"
    style="height: 1000px"
  >
    <ul class="nav nav-pills flex-column mb-auto ">
      <li class="nav-item">
        <router-link 
        class="nav-link text-white" 
        :class="currentRouteName == 'home' ? 'active' : ''"
        to="/user/sandbox">
        <i class="bi bi-house"></i>
          {{ HomeRouterName.name }} 
        </router-link>
      </li>
      <li>
        <router-link
          class="nav-link text-white"
         
          :class="currentRouteName == 'customers' ? 'active' : ''"
          to="/user/sandbox/customers"
         
        >
         <i class="bi bi-people"></i>  {{customerRouterName.name}}
        </router-link>
      </li>
      <li>
        <router-link
          class="nav-link text-white"
          :class="currentRouteName == 'purchase' ? 'active' : ''"
         
          to="/user/sandbox/purchase"
        >
        <i class="bi bi-credit-card"></i>
          {{  purchaseRouterName.name }} 
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SandBoxMenu",
  props: {},
  data() {
    return {
      isActive : true,
      currentPage: "home",
      customerRouterName: {
        name : "Clients",
        pathName : "customers"
      },
      HomeRouterName: {
        name : "Home",
        pathName : "home"
      },
      purchaseRouterName: {
        name : " Simulation d'un paiement ",
        pathName : "purchase"
      },
    }
  },
  methods: {
    changeCurrentPage(value){
      this.currentPage = value
    }
  },
  computed: {
     currentRouteName() {
       
        if (this.$route.name == undefined){
          return "home";
        }
        return this.$route.name;
    }
  }
};
</script>
