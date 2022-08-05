<template>
  <nav class="navbar navbar-expand-sm fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
      
      <img src="../assets/coins.png" width="50" alt="logo payservicia" >  <span class="colorApp fw-bold">PayServicia</span></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav ms-auto">
          
          <li class="nav-mr-lg-4" v-if="isAuth">
            <router-link class="nav-link" to="/user/dashboard"><i class="bi bi-speedometer2"></i> Dashboard</router-link>
          </li>

          <li class="nav-mr-lg-4">
            <router-link class="nav-link" to="/docs"><i class="bi bi-book"></i>  {{  isAuth ? "API REST" : "Docs" }} </router-link>
          </li>
           <li class="nav-mr-lg-4" v-if="!isAuth">
            <router-link class="nav-link" to="/signup"><i class="bi bi-person-plus-fill"></i> Signup</router-link>
          </li>
          <li class="nav-mr-lg-4" v-if="!isAuth">
            <router-link class="nav-link" to="/login"><i class="bi bi-box-arrow-in-left"></i> Login</router-link>
          </li>

          <li class="nav-mr-lg-4" v-if="isAuth">
            <router-link class="nav-link" to="/user/settings"><i class="bi bi-gear"></i> Settings</router-link>
          </li>

           <li class="nav-mr-lg-4" v-if="isAuth">
            <router-link class="nav-link" to="/user/sandbox"><i class="bi bi-box"></i> Sandbox</router-link>
          </li>

           <li class="nav-mr-lg-4" v-if="isAuth">
              <button class="btn btn-success border border-white bg-success" type="button" @click="logout()">
                <i class="bi bi-box-arrow-right"></i> Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: "Nav-bar",
  props: {
    mode: String,
  },
  data() {
    return {
      isAuth : false  
    }
  },
  mounted () {
      this.isAuth = AuthService.isAuth() ? true : false;
  },
  methods: {
    async logout() {
        await AuthService.logout();
        this.$toasted.info("Aurevoir a la prochaine !");
        this.$router.push('login');
    },
    setupData(){
      this.isAuth = AuthService.isAuth() ? true : false;
    }
  },
  watch: {
    $route (to, from) {
      this.setupData()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  border-bottom: 2px solid #213547;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
  background: #fff
}
</style>
