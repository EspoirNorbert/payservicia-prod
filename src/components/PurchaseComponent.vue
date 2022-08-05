<template>
  <div>
     <h2> <span class="badge bg-success">1</span> Choisir un client de test</h2>
     <hr>
     <div class="row">
     <div  v-for="(customer, index) in customerList" :key="index" class="col-sm-6 mb-3">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title"> Compte N°{{ customer.id }} </h5>
            <p class="card-text">Montant du compte {{ customer.account.balance }} FCFA </p>
            <router-link 
            class="btn btn-success"
            :to="'/user/sandbox/purchase/' + customer.id + '/articles'">Choisir les articles</router-link>
        </div>
        </div>
    </div>

</div>
  </div>
</template>

<script>
import UserService from "@/services/UserService";

export default {
name : "PurchaseComponent",
 data() {
    return {
      customerList: [],
    };
  },
  mounted() {
    this.getCustomer().then((customers) => {
      this.customerList = customers;
    });
  },
  methods: {
    async getCustomer() {
      return await (
        await UserService.getAllCustomers()
      ).data;
    },
    handleAchat(id){
      this.$router.push({path : "/user/sandbox/payement/" + id})
      console.log(id);
    }
  }
}
</script>

<style>

</style>