<template>
  <div class="home">
    <div class="container">
      <div  class="card mt-4 mb-4">
        <div class="card-header bg-success">
          <div class="card-title "><h4 class="text-white">Details de la transaction N°{{ transactionId }} </h4></div>
        
           <router-link class="btn btn-success ms-3 " 
           :to="'/user/sandbox/customers/' + customerInfo.id + '/transactions/'"
            
            ><i class="bi bi-backspace"></i> Retour</router-link>
        </div>
         <LoadingComponent v-if="loading" />
        <div v-else class="card-body">
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
            :content="formatStatus"
           />
           </div>
            <div class="row">
            <TransactionDetailInfoComponent
            classe="col-md-4"
            title="Solde Actuel du client"
            :content="customerInfo.account.balance == null ? '....loading' : customerInfo.account.balance"
            />
            <TransactionDetailInfoComponent
            classe="col-md-4"
            title="Solde Avant du client"
            :content="transaction.amount"
            />
            <TransactionDetailInfoComponent
            classe="col-md-4"
            title="Identifiant du client"
            :content="customerId + ' '+ customerInfo.email"
           />
           </div>
            <div class="row">
          
            <TransactionDetailInfoComponent
            classe="col-md-6"
            title="Solde Actuel du marchand"
            :content="user.account.balance == null ? '....loading' : user.account.balance"
            />
            <TransactionDetailInfoComponent
            classe="col-md-6"
            title="Solde avant du marchand"
            :content="getMerchandSolde"
            />
           </div>
               <hr>
           <div class="ro">
             <div class="col">
               <h6>Articles de la transactions</h6>
               <p>Prix total : {{ totalPrice}} XOF</p>
               <hr>
               <div class="list-group w-auto" v-if="articles.length!=0">
                <a href="#" 
                class="list-group-item list-group-item-action d-flex gap-3 py-3" 
                 v-for="(article, index) in articles" :key="index"
                 aria-current="true">
                  <img src="../assets/product.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0">
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0"> {{ article.name}} </h6>
                      <p class="mb-0 opacity-75"> {{ article.unitPrice}} </p>
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
import TransactionDetailInfoComponent from '@/components/TransactionDetailInfoComponent';
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: "SettingView",
  components: {
  TransactionDetailInfoComponent,
  LoadingComponent
  },
  data() {
    return {
      user : null,
      transactionId : null,
      transaction: null,
      articles: [],
      totalPrice : null,
      loading: false,
      customerInfo: null,
      formatStatus: null,
    };
  },
  async created () {

      this.loading = true;
      try {
        this.transactionId = this.$route.params.transactionId; 
        this.customerId = this.$route.params.customerId; 
        this.transaction = await UserService.getOneTransaction(this.customerId, this.transactionId);
        const data = await (await UserService.getTransactionArticles(this.customerId , this.transactionId)).data
        this.articles = data.articles;
        this.totalPrice = data.totalArticleAmount;
        this.getUser();
        this.getCustomer(this.customerId);
        this.formatStatusText();
        this.loading = false;
      } catch (error) {
        this.loading  = false;

      }
      
  },
  methods: {
    async getUser() {
      this.user = await UserService.getUserInfo();
    },
    async getCustomer(customerId) {
      this.customerInfo = await UserService.getCustomerInfo(customerId);
    },
    async formatStatusText(){
      if (this.transaction.status =="REFUSED")
          this.formatStatus = "<span class='badge bg-danger'>"+this.transaction.status +"</span>";
           
      if (this.transaction.status == "SUCCESS" ){
         
           this.formatStatus = "<span class='badge bg-success'>"+this.transaction.status +"</span>";
          console.log(this.formatStatus);
           
      } 
    }
  },
  computed: {
    getMerchandSolde(){
      if (this.transaction.status == "SUCCESS"){
          return this.user.account.balance - this.totalPrice
      }else {
        return this.user.account.balance;
      }
    }
   
  }
};
</script>
