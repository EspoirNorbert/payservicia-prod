<template>
  <div>
    <div class="articles-header d-flex">
      <h2><span class="badge bg-success">2</span> Choisir des articles</h2>
      <div class="float-sm-end">
        <router-link class="btn btn-success ms-3 " to="/user/sandbox/purchase"
        ><i class="bi bi-backspace"></i> Retour</router-link>
      </div>
    </div>
     <LoadingComponent v-if="loading" />
    <div v-else class="articles-body">
      <p><span>CustomerID ({{ customerInfo == null ? "...loading" : customerInfo.id + ' - ' + customerInfo.email }})</span></p>
    <hr />
    <div class="row">
      <div class="col-md-8">
        <h6>Les articles</h6>
        <div class="row">
          <div
            v-for="(item, index) in productListData"
            :key="index"
            class="col-12 col-sm-8 col-md-6 col-lg-4 mb-5 mr-3"
          >
            <div class="card">
              <img :src="item.image" width="1" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title elipse">{{ item.title }}</h5>
                <p class="card-text">{{ item.price }} FCFA</p>
                <button
                  :disabled="item.isAdded"
                  @click="addToArticleToPaid(item.id)"
                  class="btn btn-success"
                >
                  Choisir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h6>Articles de l'achat de la simulation</h6>
        <div
          class="d-flex p-5 border border-success"
          v-if="articleToPaidList.length == 0"
        >
          <p class="text-center">Aucun article ajouté</p>
        </div>
        <div v-else class="article-paid border border-success">
          <div
            class="p-2 d-flex"
            v-for="(article, index) in articleToPaidList"
            :key="index"
          >
            <div class="col-8">{{ article.name }}</div>
            <div class="ms-auto">{{ article.unitPrice }} FCFA</div>
            <div class="ms-auto badge badge-success">
              <span class="badge bg-success">{{ article.quantity }} </span>
            </div>
             <button 
             @click="handleClickDelete(article.id)"
             class="btn btn-danger p-2" style="width:36px"><i class="bi bi-trash"></i></button>
          </div>
          <div class="border-top px-2 mx-2"></div>
          <div class="p-2 d-flex pt-3">
            <div class="col-8"><b>Total</b></div>
            <div class="ms-auto">
              <b class="text-success"> {{ totalPrice }} FCFA </b>
            </div>
          </div>
          <div class="border-top px-2 mx-2"></div>
          <div class="p-2">
              <p class="ms-auto"> Montant a payer <span class="ps-2 text-success fw-bold"> {{ totalPrice }} FCFA </span> </p>
             <div class="d-grid">
                <button type="button"
                :disabled="isSent" 
                @click="handleClickPayement()"
                class="btn btn-primary btn-block"> {{ !isSent ? "Proceder au payement" : "Processus de paiement en cours...." }} </button>
            
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  
  </div>
</template>

<script>
import ProductService from "@/services/ProductService";
import UserService from '@/services/UserService'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: "ArticleComponent",
  components: {
    LoadingComponent
  },
  data() {
    return {
      customerID: null,
      customerInfo : null,
      productListData: [],
      articleToPaidList: [],
      totalPrice: null,
      loading :false,
      defautImage : "/img/product.png",
      isSent : false,
    };
  },
  methods: {
    addToArticleToPaid(id) {
 
      const article = this.productListData.find((article) => article.id == id);
      if (article != null) {
        const articleToAdd = {
          id : article.id,
          name: article.title,
          unitPrice: article.price,
          quantity: 1,
          totalPrice: article.price,
        };
        this.articleToPaidList.push(articleToAdd);
        this.$toasted.show("Article N°" + id + " a été ajouté aux articler a payer");
        this.calculTotalPrice();
        this.checkIfArticleIsAlreadyAdded(id);
      }
    },
    handleClickDelete(id){
      this.updateProductStatus(id);
      this.articleToPaidList = this.articleToPaidList.filter(item => item.id!= id);
      this.$toasted.show(`L'article N°${id} a été supprimer de la liste`);
    },
    updateProductStatus(id) {
      console.log("Id " + id);
      let produit = this.productListData.find((article) => article.id == id)
      if (produit !=null)
          produit.isAdded = false;
    },
    checkIfArticleIsAlreadyAdded(id) {
      let produit = this.productListData.find((article) => article.id == id)
      if (produit != null) {
          produit.isAdded = true;
      }
    },
    calculTotalPrice() {
       this.totalPrice =  this.articleToPaidList.map(item =>  parseFloat(item.totalPrice)).reduce((prev, curr) => prev + curr, 0);
    } ,
    addProduit(data = []){
        for (const product of data) {
            const newProduit = {
            id :product.id,
            image:product.image,
            title:product.title,
            price:product.price,
            isAdded: false
        }
        this.productListData.push(newProduit);
        this.productListData = this.productListData.slice(0, 10);
        }
    },
    async handleClickPayement(){
        this.isSent = true;
        const data = {
            "totalPrice" : this.totalPrice,
            "articles" : this.articleToPaidList,
        }
        try {
            const resultat = await (await UserService.createTransaction(data , this.customerID)).data;

            if (resultat.code == 200){
               this.isSent = false;
                this.$toasted.show("Les articles ont été payé avec success \n Vous allez voir les details de la transactions");
  

                const detailTransaction =  resultat.datas;
                const transactionID = detailTransaction.transaction._id;

                setTimeout(() => {
                  window.location.href=`/user/sandbox/purchase/${this.customerID}/transactions/${transactionID}`;
                }, 2500);
                
              } 
            
        } catch (error) {
            if (error.response) {
            this.isSent = false;
            const data = error.response.data;
            const transactionID = data.status._id;
            this.$toasted.error(`Les articles n'ont pas été payées la transaction a été refusé ,le client n'a pas assez d'argent`);
           
            setTimeout(() => {
                  window.location.href=`/user/sandbox/purchase/${this.customerID}/transactions/${transactionID}`;
            }, 2500);
                
          }
        }
    }
  },
  watch: {
    totalPrice: function (value) {
        this.calculTotalPrice();
      },
  },
  async created() {
    this.loading = true;
    ProductService.getProduit()
      .then((response) => response.json())
      .then((data) => {
        this.addProduit(data);
        this.loading= false
      });
    this.customerID = this.$route.params.id;
    this.customerInfo = await UserService.getCustomerInfo(this.customerID);
  },
};
</script>

<style>
.elipse {
  white-space: nowrap;
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
