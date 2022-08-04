<template>
<div>
    <FormUserComponent 
      title="Creation de compte"
      buttonText="S'inscrire"
      typeForm="signup"
       />
</div>
</template>
<script>
import FormUserComponent from '@/components/FormUserComponent'

export default {
  name: "SignupView",
  components: {
    FormUserComponent
  },

};
</script>

<style scoped>


</style>