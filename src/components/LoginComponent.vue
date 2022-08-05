<template>
  <section>
    <div class="container-fluid vh-100 mt-5">
      <div class="">
        <div class="rounded d-flex justify-content-center">
          <div class="col-md-4 col-sm-12 shadow-sm border-radius w-50 p-5 mb-3">
            <div class="text-center">
              <h3 class="text-primary">
                <i class="bi bi-person-circle"></i> {{ title }}
              </h3>
            </div>
            <div class="p-4">
              <form @submit.prevent="handleClickedSubmit">
                <div class="input-group mb-3">
                  <span class="input-group-text bg-primary"
                    ><i class="bi bi-envelope text-white"></i
                  ></span>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    autocomplete="false"
                    v-model="email"
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
                    autocomplete="false"
                    v-model="password"
                  />
                </div>
                <div>
                  <p class="mt-3" v-if="typeForm == 'login'">
                    <router-link to="/reset-password"
                      ><span>Mot de passe oublié ?</span></router-link
                    >
                  </p>
                </div>
                <div class="d-grid col-12 mx-auto">
                  <button 
                    :disabled="isSubmited"
                    class="btn btn-primary text-white" type="submit">
                    <span></span> {{ buttonText }}
                  </button>
                </div>

                <div class="divider d-flex align-items-center mx-auto my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <div>
                  <router-link
                    class="btn btn-primary btn-outline-primary d-block mb-2"
                    to=""
                    ><i class="bi bi-facebook"></i> Facebook</router-link
                  >
                  <router-link class="btn btn-primary d-block" to=""
                    ><i class="bi bi-google"></i> Google</router-link
                  >
                </div>

                <p class="mt-5">
                  <span> Vous n'avez pas encore de compte ?</span>
                  <router-link class="text-primary spanForm" to="/signup"
                    >Inscrivez-vous gratuitement</router-link
                  >
                </p>
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

export default {
  name: "LoginComponent",
  props: {
    title: { String },
    buttonText: { String },
    userType: { String },
    typeForm: { String },
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
      isSubmited : false,
    };
  },
  methods: {
    isFieldEmpty() {
      if (this.email == null || this.password == null) {
        this.$toasted.show("Fields are empty ! All field is required");
        return true;
      }
      return false;
    },
    async handleClickedSubmit(event) {
      this.submitedText = "....loading";
 
      if (!this.isFieldEmpty()) {
        const data = { email: this.email, password: this.password };
        try {
          const response = await (await AuthService.login(data)).data;
          console.log(response);
          this.$toasted.info(response.message);
          await AuthService.saveToken(response.datas.token);
          this.$router.push({ path: "/user/dashboard" });
        } catch (error) {
          if (error.response) {
            const data = error.response.data.error;
            console.log(data);
            this.$toasted.error(data.message);
          }
        }
      }
    },
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
