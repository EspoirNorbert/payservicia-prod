<template>
  <div id="app">
    <Navbar />
      
    <router-view />
      <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ToastNotification from './components/ToastNotification.vue'
import Footer from '@/components/Footer'

export default ({
  components: {
    Navbar,
    ToastNotification,
    Footer
  }
})
</script>

<style>

</style>