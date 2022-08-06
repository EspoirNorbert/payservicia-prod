<template>
<section >
  <div>
    <h2><span class="badge bg-success">1</span> Choisir un client de test</h2>
    <hr/>
    <LoadingComponent v-if="loading" />
    <div class="border p-2">
      <div v-if="customerList.length == 0"  class="d-flex flex-column p-5 text-center mx-auto">
      <p>Aucun utilisateur de test n'a été crée veuillez creer un client dans la section 
        <strong><router-link to="customers">clients</router-link></strong></p>
    </div>
    <div v-else class="row">
      <div
        v-for="(customer, index) in customerList"
        :key="index"
        class="col-sm-6 mb-3"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Compte N°{{ customer.id }} <small>{{ customer.email }}</small> </h5> <br>
            <h6></h6>
            <p class="card-text">
              Montant du compte {{ customer.account.balance }} XOF
            </p>
            <router-link
              class="btn btn-success"
              :to="'/user/sandbox/purchase/' + customer.id + '/articles'"
              >Choisir les articles</router-link
            >
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
 
</section>
  
</template>

<script>
import UserService from "@/services/UserService";
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: "PurchaseComponent",
  components: {
    LoadingComponent
  },
  data() {
    return {
      customerList: [],
      loading: false,
    };
  },
  created() {
    this.loading = true;
    console.log(this.loading);
  
    this.getCustomer().then((customers) => {
      this.customerList = customers;
      this.loading = false;
    });
  },
  methods: {
    async getCustomer() {
     try {
        return await (
        await UserService.getAllCustomers()
      ).data;
     } catch (error) {
       if (error.response) {
            const data = error.response.data;
            console.log(data);
            this.$toasted.error(data);
        }
        this.loading = false
     }
    },
    handleAchat(id) {
      this.$router.push({ path: "/user/sandbox/payement/" + id });
      console.log(id);
    },
  },
};
</script>

<style></style>
