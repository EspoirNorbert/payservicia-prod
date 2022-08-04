<template>
   <div>
       <div class="row">
           <div 
           v-for="(item, index) in productListData" :key="index"
           class="col-12 col-sm-8 col-md-6 col-lg-4 mb-5 mr-3">
               <div class="card">
                <img src="../assets/product.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title elipse">  {{ item.title}} </h5>
                    <p class="card-text"> {{item.price}} FCFA </p>
                </div>
            </div>
           </div>
       </div>
   </div>
</template>

<script>
import ProductService from '@/services/ProductService';

export default {
 name: "Produit",
 data() {
     return {
        productListData : []
     }
 },
 methods: {
 },
 mounted () {
    ProductService.getProduit()
    .then(response => response.json())
    .then(data => {
        this.productListData = data;
        this.productListData = this.productListData.slice(0, 10)
    });
 }
}
</script>

<style>
.elipse {
     white-space: nowrap; 
  width: 120px; 
  overflow: hidden;
  text-overflow: ellipsis; 
}
</style>