<template>
  <div :class="classe">
    <h6> {{ title }} </h6>
    <hr />
    <p v-html="content"></p> 
  </div>
</template>

<script>
export default {
    name: "TransactionDetailInfoComponent",
    props: {
        title: {type: String} , content:  [Number, String] , classe: {type : String}
    },
    data() {
      return {
     
      }
    }
};
</script>

<style></style>
