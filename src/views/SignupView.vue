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
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration</h3>
              <form>
                <div class="form-outline">
                  <label class="form-label" for="username">Email</label>
                  <input
                    type="mail"
                    id="email"
                    class="form-control"
                    v-model="email"
                  />
                  
                </div>

                <div class="form-outline">
                  <label class="form-label" for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    v-model="password"
                  />
                  
                </div>
                
                <div class="form-outline">
                   <label class="form-label" for="confirm_password">Confirm password</label>
                  <input
                    type="password"
                    id="confirm_password"
                    class="form-control"
                    v-model="confirm_password"
                  />
                 
                </div>

                <div class="mt-4 pt-2">
                  <input
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                    value="Submit"
                    @click="handleClickedSubmit($event)"
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
import AuthService from '@/services/AuthService';

export default {
  name: "SignupView",
  components: {
    //HelloWorld,
  },
  data() {
    return {
      email : null,
      password : null,
      confirm_password : null
    }
  },
  methods: {
    
    isFieldEmpty() {
        if (this.email=="" || this.password=="" || this.confirm_password == ""){
          this.$toasted.show("Fields are empty ! All field is required");
          return true
        }
        return false
    },
    isPasswordMatching() {
        if(this.password != this.confirm_password) {
          this.$toasted.show("Password and confirm password not matching");
          return false
        };
        return true;
    },
    async handleClickedSubmit(event) {
      event.preventDefault();
      const data = {
        "email" : this.email,
        "password" :this.password,
        "password_confirmation" : this.confirm_password
      }

      console.log(data);
        if(!this.isFieldEmpty()){

            if (this.isPasswordMatching()){
                try {
                  const response = await AuthService.signup(data);
                  if (response.data){
                      const result = response.data;
                      this.$toasted.info(result.message);
                      // redirect vers la page d'authentification
                      this.$router.push("login");
                  }
                  
                } catch (error) {
                  console.log(error);
                  if (error.response){
                    const data = error.response.data.error;
                    console.log(data);
                    this.$toasted.error(data.message);
                  }
                  //this.$toasted.error("An Error occured " + error.message);
                  //return { error }
                }
            }
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.card-registration .select-arrow {
  top: 13px;
}
</style>