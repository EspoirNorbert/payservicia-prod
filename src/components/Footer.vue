<template>
  <footer class="footer mt-auto py-3">
    <div class="container">
      <p class="text-dark text-center h-3">{{ copyright }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      appName: "Payservicia",
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright  © ${this.appName} ${currentYear} All Right reserved `;
    },
  },
};
</script>

<style>
footer {
  border-top: 2px solid #213547;
}
</style>
