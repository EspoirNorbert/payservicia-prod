<template>
  <section>
    <div class="container-fluid vh-100 mt-5">
      <div class="">
        <div class="rounded d-flex justify-content-center">
          <div class="col-md-4 col-sm-12 shadow-sm border-radius w-50 p-5">
            <div class="text-center">
              <h3 class="text-primary"> <i class="bi bi-person-circle"></i> {{ title }} </h3>
            </div>
            <div class="p-4">
              <form action="">
                <div class="input-group mb-3">
                  <span class="input-group-text bg-primary"
                    ><i class="bi bi-envelope text-white"></i
                  ></span>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    autocomplete="false"
                  />
                </div>
                   <div class="input-group mb-3">
                  <span class="input-group-text bg-primary"
                    ><i class="bi bi-key-fill text-white"></i
                  ></span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Mot de passe"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-primary"
                    ><i class="bi bi-key-fill text-white"></i
                  ></span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirmation du mot de passe"
                  />
                </div>
                <div class="d-grid col-12 mx-auto">
                  <button class="btn btn-primary" type="button">
                    <span></span> {{ buttonText}}
                  </button>
                </div>
                 <p class="mt-3" v-if="typeForm == 'login'">
                    <router-link to="" ><span>Mot de passe oublié ?</span></router-link>
                </p>
                <p class="">
                    {{  typeForm== "signup" ? "Vous avez déjà un compte ?" : "Vous n'avez pas encore de compte ?"  }}
                 
                  <span  
                  @click="goToPage()"
                  class="text-primary spanForm"> {{typeForm == "signup" ? "Connectez-vous" : " Inscrivez-vous gratuitement"}} </span>
                </p>
                <div v-if="typeForm == 'login'" class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
             <i class="bi bi-facebook"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
             <i class="bi bi-google"></i>
            </button>

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
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";

export default {
  name: "FormUserComponent",
  props: {
    title : {String},
    buttonText : {String},
    userType : {String},
    typeForm : {String}
  },
  data() {
    return {
      emailLabel: "Email",
      passwordLabel: "Password",
      confirmPasswordLabel: "Confirm password",
      email: null,
      password: null,
      confirm_password: null,
      submitedText: "Sign in",
    };
  },
  methods: {
    isFieldEmpty() {
      if (
        this.email == "" ||
        this.password == "" ||
        this.confirm_password == ""
      ) {
        this.$toasted.show("Fields are empty ! All field is required");
        return true;
      }
      return false;
    },
    isPasswordMatching() {
      if (this.password != this.confirm_password) {
        this.$toasted.show("Password and confirm password not matching");
        return false;
      }
      return true;
    },
    async handleClickedSubmit(event) {
      const data = {
        email: this.email,
        password: this.password,
        password_confirmation: this.confirm_password,
      };

      console.log(data);
      if (!this.isFieldEmpty()) {
        if (this.isPasswordMatching()) {
          try {
            let response = null;
            if (this.userType == "customer")
              response = await UserService.createCustomer(data);
            else response = await AuthService.signup(data);
            if (response.data) {
              const result = response.data;
              this.$toasted.info(result.message);
              // redirect vers la page d'authentification
              this.$router.push("login");
            }
          } catch (error) {
            console.log(error);
            if (error.response) {
              const data = error.response.data.error;
              console.log(data);
              this.$toasted.error(data.message);
            }
            //this.$toasted.error("An Error occured " + error.message);
            //return { error }
          }
        }
      }
    },
    goToPage () {
        if (this.userForm == "signup")
            this.$router.push("signup")
        else
            this.$router.push("login")
    }
  },
  computed: {
    isActive: function () {
      console.log("Called isField ", this.isFieldEmpty());
      return this.isFieldEmpty();
    },
  },
};
</script>
<style>
.spanForm {
    cursor: pointer;
}
</style>
