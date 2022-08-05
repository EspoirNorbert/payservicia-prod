<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 mt-0 bg-dark"
    style="height: 1000px"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <i class="bi bi-list"></i>
      <span class="fs-4">Menu</span>
    </a>

    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link 
        class="nav-link"  aria-current="page"
        @click="changeCurrentPage('home')"
        :class="currentPage == 'home' ? 'active' : ''"
        to="/user/sandbox">
        <i class="bi bi-house"></i>
          Home
        </router-link>
      </li>
      <li>
        <router-link
          class="nav-link text-white"
          aria-current="page"
           @click="changeCurrentPage('clients')"
             :class="currentPage == 'clients' ? 'active' : ''"
          to="/user/sandbox/customers"
        >
         <i class="bi bi-people"></i>  Clients
        </router-link>
      </li>
      <li>
        <router-link
          class="nav-link text-white"
          aria-current="page"
          to="/user/sandbox/customers"
        >
        <i class="bi bi-wallet"></i>
        Transactions
        </router-link>
      </li>
      <li>
        <router-link
          class="nav-link text-white"
          aria-current="page"
          to="/user/sandbox/purchase"
        >
        <i class="bi bi-credit-card"></i>
          Simulation d'un paiement
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
      currentPage: "home"
    }
  },
  methods: {
    changeCurrentPage(value){
      this.currentPage = value
    }
  }
};
</script>
