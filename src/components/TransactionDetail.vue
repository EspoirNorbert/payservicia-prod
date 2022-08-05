<template>
  <div class="home">
    <div class="container">
      <div class="card mt-4 mb-4">
        <div class="card-header bg-success">
          <div class="card-title text-white"><h4>Details de la transaction N°{{ transactionId }} </h4></div>
        </div>
        <div class="card-body">
         <div class="row">
            <TransactionDetailInfoComponent
            classe="col-md-4"
            title="Identifiant de la transaction"
            :content="transactionId"
            />
            <TransactionDetailInfoComponent
            classe="col-md-4"
            title="Heure de la transaction"
            :content="transaction.createdAt== null ? '...loading' : transaction.createdAt"
            />
              <TransactionDetailInfoComponent
            classe="col-md-4"
            title="Status de la transaction"
            :content="transaction.status"
           />
           </div>
            <div class="row">
            <TransactionDetailInfoComponent
            classe="col-md-4"
            title="Solde Actuel du client"
            :content="transaction.amount"
            />
            <TransactionDetailInfoComponent
            classe="col-md-4"
            title="Solde Restant"
            :content="transaction.amount"
            />
            <TransactionDetailInfoComponent
            classe="col-md-4"
            title="Identifiant du client"
            :content="customerId"
           />
           </div>
            <div class="row">
          
            <TransactionDetailInfoComponent
            classe="col-md-6"
            title="Solde Actuel du marchand"
            content="1899 FCFA"
            />
            <TransactionDetailInfoComponent
            classe="col-md-6"
            title="Solde Debité"
            content="12:00"
            />
           </div>
               <hr>
           <div class="ro">
             <div class="col">
               <h6>Articles de la transactions</h6>
               <p>Total price : {{ article}} </p>
               <hr>
               <div class="list-group w-auto" v-if="articles.length!=0">
                <a href="#" 
                class="list-group-item list-group-item-action d-flex gap-3 py-3" 
                 v-for="(article, index) in articles" :key="index"
                 aria-current="true">
                  <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0">
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0"> {{ article.name}} </h6>
                      <p class="mb-0 opacity-75"> {{ article.unitPrice}} FCFA </p>
                    </div>
                    <small class="opacity-50 text-nowrap"><span class="badge bg-success"> {{ article.quantity }} </span></small>
                  </div>
                </a>

</div>
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
</template>
<script>
import UserService from '@/services/UserService';
import TransactionDetailInfoComponent from '@/components/TransactionDetailInfoComponent'

export default {
  name: "SettingView",
  components: {
  TransactionDetailInfoComponent
  },
  data() {
    return {
      user : null,
      transactionId : null,
      transaction: null,
      articles: [],
      totalPrice : null
    };
  },
  async created () {
      this.transactionId = this.$route.params.transactionId; 
      this.customerId = this.$route.params.customerId; 
      
      this.transaction = await UserService.getOneTransaction(this.customerId, this.transactionId);
      const data = await (await UserService.getTransactionArticles(this.customerId , this.transactionId)).data
      this.articles = data.articles;
      this.totalPrice = data.totalPrice;
      
  },
  methods: {
    async getUser() {
      this.user = await UserService.getUserInfo();
    },
    format(){
      
    }
  },
  updated () {
    console.log("Updated call");
  }
};
</script>
