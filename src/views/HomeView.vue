<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <h2>Page Accueil</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    //HelloWorld,
    Navbar,
  },
};
</script>
