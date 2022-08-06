<template>
  <section>
    <div>
      <div class="transaction-header d-flex">
      <h2>Les Transactions ({{ transactionList.length }}) | </h2>
      <p class="mt-2"><span>CustomerID ({{ customerId == null ? "...loading" : customerId }})</span></p>
      <router-link class="btn btn-success ms-3 " 
      to="/user/sandbox/customers"><i class="bi bi-backspace"></i> Retour</router-link>
      <hr>
    </div>
      <hr />
      <LoadingComponent v-if="loading" />
       <div
      v-if="transactionList.length == 0"
      class="d-flex flex-column p-5 text-center mx-auto border "
     >
      <h3>
        <small> Vous n'avez effectuer aucun payement pour l'instant</small>
      </h3>
      <p>
        <router-link   :to="'purchase/' + customerId + '/articles'" class="btn btn-success">
         Simuler un achat et payer</router-link>
      </p>
    </div>
      <div v-else class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr class="bg-success text-white">
              <th scope="col">ID</th>
              <th scope="col">Statut</th>
              <th scope="col">Type</th>
              <th scope="col">Reference</th>
              <th scope="col">Montant</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in transactionList" :key="index">
              <td>{{ item._id }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.currency }}</td>
              <td>{{ item.amount }}</td>
              <td>
               
                <router-link
                  class="btn btn-success me-3"
                  :to="'/user/sandbox/purchase/' + customerId + '/transactions/' + item._id"
                  >Details</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </section>
</template>

<script>
import UserService from "@/services/UserService";
import LoadingComponent from "@/components/LoadingComponent";

export default {
  name: "TransactionComponent",
  components: {
    LoadingComponent
  },
  data() {
    return {
      transactionList: [],
      loading: false,
      customerId: null,
      previous: null
    };
  },
  created() {
    this.customerId = this.$route.params.id;
    this.loading = true;
    this.getTransaction().then((customers) => {
      this.transactionList = customers;
      console.log(this.transactionList);
      this.loading= false;
    });
  },
  methods: {
    async getTransaction() {
     try {
        return await (await UserService.getAllTransactions(this.customerId)).data;
     } catch (error) {
        if (error.response) {
            const data = error.response.data;
            console.log(data);
            this.$toasted.error(data);
        }
        this.loading = false
     }
    }
  },
};
</script>

<style></style>
