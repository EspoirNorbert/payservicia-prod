<template>
  <section>
     
  </section>
</template>

<script>
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";

export default {
  name: "SignupComponent",
  props: {
    userType: { String },
  },
  data() {
    return {
      titleForm: "Sign in",
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

</style>
