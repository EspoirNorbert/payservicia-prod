<template>
  <section>
     <div class="articles-header d-flex">
      <h2><span class="badge bg-success">2</span> Creation de compte</h2>
      <div class="float-sm-end">
        <router-link class="btn btn-success ms-3 " to="/user/sandbox/customers"
        ><i class="bi bi-backspace"></i> Retour</router-link>
      </div>
    </div>
    <hr>
    <FormUserComponent 
      title="Creation d'un compte client"
      buttonText="Creer le compte"
      userType="customer"
    />
  </section>
</template>

<script>
import FormUserComponent from '@/components/FormUserComponent';

export default {
  name: "FormCustomer",
  components: {
    FormUserComponent
  }
};
</script>

<style>
.formCard{
  width: 700px;
}
</style>
