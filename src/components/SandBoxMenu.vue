<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 mt-0 bg-dark h-100">
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi pe-none me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Menu</span>
    </a>
 
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/user/sandbox" >
          Home
        </router-link>
      </li>
      <li>
         <router-link class="nav-link text-white" aria-current="page" to="/user/sandbox/customers" >
          Clients
        </router-link>
      </li>
      <li>
        <router-link class="nav-link text-white" aria-current="page" to="/user/sandbox/customers" >
          Transactions
        </router-link>
      </li>
      <li>
         <router-link class="nav-link text-white" aria-current="page" to="/user/sandbox/purchase" >
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
};
</script>
