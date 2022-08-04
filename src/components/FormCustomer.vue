<template>
  <section class="formCard">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div
            class="card shadow-2-strong card-registration"
            style="border-radius: 15px"
          >
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Create an customer</h3>
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

import UserService from '@/services/UserService'

export default {
  name: "FormCustomer",
  props: {},
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    isEmpty() {
      if (this.email == "" || this.password == "") {
        this.$toasted.show("Fields are empty ! All field is required");
        return true;
      }
      return false;
    },

    async handleClickedSubmit(event) {
      event.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
      };

      console.log(data);
      if (!this.isEmpty()) {
        try {
          const response = await UserService.createCustomer(data);
          if (response.data) {
            const result = response.data;
            this.$toasted.info(result.message);
          }
        } catch (error) {
          console.log(error);
          if (error.response) {
            const data = error.response.data.error;
            console.log(data);
            this.$toasted.error(data.message);
          }
        
        }
      }
    },
  },
};
</script>

<style>
.formCard{
  width: 700px;
}
</style>
