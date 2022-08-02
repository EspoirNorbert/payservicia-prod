<template>
  <div id="app">
    <Navbar />
    <ToastNotification/>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ToastNotification from './components/ToastNotification.vue'

export default ({
  components: {
    Navbar,
    ToastNotification
  }
})
</script>

<style>

</style>