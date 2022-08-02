<template>
  <section class="">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div
            class="card shadow-2-strong card-registration"
            style="border-radius: 15px"
          >
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login</h3>
              <form>
                <div class="form-outline">
                  <label class="form-label" for="username">Email</label>
                  <input
                    type="mail"
                    id="email"
                    class="form-control"
                  />
                  
                </div>

                <div class="form-outline">
                  <label class="form-label" for="lastName">Password</label>
                  <input
                    type="password"
                    id="lastName"
                    class="form-control"
                  />
                  
                </div>

                <div class="mt-4 pt-2">
                  <input
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "LoginView",
  components: {
    //HelloWorld,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gradient-custom-2 {
/* fallback for old browsers */
background: #fccb90;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
.gradient-form {
height: 100vh !important;
}
}
@media (min-width: 769px) {
.gradient-custom-2 {
border-top-right-radius: .3rem;
border-bottom-right-radius: .3rem;
}
}
</style>
