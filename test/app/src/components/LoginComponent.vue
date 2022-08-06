<template>
  <section>
    <div class="container-fluid vh-100 mt-5 ">
      <div class="">
        <div class="rounded d-flex justify-content-center">
          <div class="col-md-4 col-sm-12 shadow-sm border-radius w-50 p-5 mb-5">
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
                <div class="d-grid col-12 mx-auto">
                  <button 
                    :disabled="isSubmited"
                    class="btn btn-primary text-white" type="submit">
                    <span></span> {{ isSubmited ?  "..loading"  :  buttonText}}
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
      this.isSubmited = true;
 
      if (!this.isFieldEmpty()) {
        const data = { email: this.email, password: this.password };
        try {
          this.isSubmited = true;
          const response = await (await AuthService.login(data)).data;
          this.$toasted.info(response.message);
          await AuthService.saveToken(response.datas.token);
          this.submitedText = false;
          window.location.href="/user/sandbox/";
        } catch (error) {
          if (error.response) {
            this.isSubmited = false;
            const data = error.response.data.error;
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
