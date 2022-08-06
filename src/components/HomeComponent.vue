<template>
  <header class="vh-50">
    <div class="px-4 py-5 my-5 text-center mt-5 wrapper">
      <img
        class="d-block mx-auto mb-4"
        src="../assets/coins.png"
        alt="logo application"
        width="72"
        height="57"
      />
      <h1 class="display-5 fw-bold titleApp">
        Payement <span class="colorApp">Gateway</span> <br />
        System
      </h1>
      <div class="col-lg-6 mx-auto">
        <p class="mb-4 para">
          Payservicia is a Gateway system to allow to pay any bills , or
          articles <br />
          He is easy to deploy and integrate in your application for payement
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <routerLink to="/user/sandbox/purchase" type="button" class="btn  border border-3 rounded-pill btn-success btn-lg px-4 gap-3">
            Simuler un payement
          </routerLink>
          <routerLink to="/docs" type="button" class="btn border border-3 rounded-pill btn-outline-success btn-lg px-4">
            Documentation
          </routerLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "HomeComponent",
  components: {
  },
};
</script>

<style>
header {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}
.titleApp {
  font-size: 5rem;
  color: #213547;
}
.wrapper {
  border-bottom: 2px solid #213547;
  padding: 916px 32px;
}
.para {
  opacity: 1 !important;
  color: rgb(86 84 84) !important;
}
</style>
