<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-success">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">PayServicia</router-link>
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
          
          <li class="nav-mr-lg-4">
            <router-link class="nav-link" to="/docs">Docs</router-link>
          </li>
          <li class="nav-mr-lg-4">
            <router-link class="nav-link" to="/signup">S'inscire</router-link>
          </li>
          <li class="nav-mr-lg-4">
            <router-link class="nav-link" to="/login">Se connecter</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav-bar",
  props: {
    mode: String,
  },
  //components: { Navbar },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
