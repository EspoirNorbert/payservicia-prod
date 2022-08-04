<template>
 <div>
    <LoginComponent 
      title="Connexion"
      buttonText="Se connecter"
      typeForm="login"
    /> 
</div>
</template>
<script>

import LoginComponent from '@/components/LoginComponent'

export default {
  name: "LoginView",
  components: {
    LoginComponent
  }
};
</script>
<style scoped>
</style>
