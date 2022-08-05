<template>
  <div :class="classe">
    <h6> {{ title }} </h6>
    <hr />
    <p> {{ content }} </p>
  </div>
</template>

<script>
export default {
    name: "TransactionDetailInfoComponent",
    props: {
        title: {type: String} , content: {type: String} , classe: {type : String}
    }
};
</script>

<style></style>
