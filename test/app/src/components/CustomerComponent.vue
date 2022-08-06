<template>
  <div>
   <div class="customer-top">
      <h2>Les clients  ({{ customerList.length  }}) </h2>
      <hr>
   </div>
    <LoadingComponent v-if="loading" />
    <div v-else class="customer-wrapper border p-2">
      <router-link v-if="customerList.length !=0" to="customers/create" class="btn btn-success">
      <i class="bi bi-plus-circle-fill"></i> Ajouter un client</router-link>
    <hr>
     <div
      v-if="customerList.length == 0"
      class="d-flex flex-column p-5 text-center mx-auto"
     >
      <h3>
        <small> Vous n'avez ajoute aucun client</small>
      </h3>
      <p>
        Tous vos clients de test seront sauvegardées ici pour que vous puissiez les
        consulter tout moment. <br>
        <router-link  to="customers/create" class="btn btn-success">
        <i class="bi bi-plus-circle-fill"></i> Ajouter un client</router-link>
      </p>
    </div>
    <div v-else class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr class="bg-success text-white">
          <th scope="col">Numero de compte</th>
          <th scope="col">Email</th>
          <th scope="col">Solde</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in customerList" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.account.balance }} FCFA</td>
          <td>
            <router-link class="btn btn-success me-3" 
             :to="'purchase/' + item.id + '/articles'"
             ><i class="bi bi-cart"></i> Achat</router-link>
            <router-link 
            
            
            :to="'customers/' + item.id + '/transactions'" 
              class="btn btn-success me-3"><i class="bi bi-wallet"></i> Transactions</router-link>
            <button 
            
            class="btn btn-danger" @click="handleClickDeleteAccount(item.id)" ><i class="bi bi-trash"></i> Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService";
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: "TableCustomer",
  components: {
    LoadingComponent
  },
  data() {
    return {
      customerList: [],
      loading: false
    };
  },
  created() {
    this.loading = true;
    this.loadData();
  },
  methods: {
    loadData() {
      this.getCustomer().then((customers) => {
        this.customerList = customers;
        this.loading = false
      });
    },
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
    
    async handleClickDeleteAccount(id){

      if (confirm("Voulez-vous vraiment supprimer cet client de test")){
      try {
        const rep = await (await UserService.deleteCustomer(id)).data;

        if (rep.code == "200"){
           this.$toasted.info("Le compte du client N°"+ id+ " a  été supprimer avec success");
           this.loadData();
        }
      } catch (error) {
           console.log(error);
            if (error.response) {
              const data = error.response.data.error;
              console.log(data);
              this.$toasted.error(data.message);
            }
          
      }  
      }
    }
  },
};
</script>

<style>
</style>
