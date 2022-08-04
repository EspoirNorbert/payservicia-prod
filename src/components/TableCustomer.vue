<template>
  <div>
    <div
      v-if="customerList.length == 0"
      class="d-flex flex-column p-5 text-center mx-auto"
    >
      <h3>
        <small> Vous n'avez ajoute aucun etudiant</small>
      </h3>
      <p>
        Tous vos etudiants seront sauvegardées ici pour que vous puissiez les
        consulter tout moment.
      </p>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr class="bg-success text-white">
          <th scope="col">Number Compte</th>
          <th scope="col">Email</th>
          <th scope="col">Balance</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in customerList" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.account.balance }} FCFA</td>
          <td>
            <button class="btn btn-success gap-2" @click="handleAchat(item.id)">Achat</button>
            <button class="btn btn-success">Transactions</button>
            
             <router-link to=""></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserService from "@/services/UserService";

export default {
  name: "TableCustomer",
  data() {
    return {
      customerList: [],
    };
  },
  mounted() {
    this.getCustomer().then((customers) => {
      this.customerList = customers;
      console.log(this.customerList);
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
  },
};
</script>

<style></style>
