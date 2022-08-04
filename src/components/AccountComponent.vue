<template>
  <div class="" id="account">
    <h6> {{headerTitle}} </h6>
    <hr />
    <form class="mb-3">
      <div class="form-group mb-2">
        <label for="username"> {{  usernameLabel }}  </label>
        <input
          type="text"
          class="form-control"
          id="username"
          aria-describedby="usernameHelp"
          placeholder="Entrer votre email"
          :value="emailInput"
        />
      </div>
      <div class="form-group">
        <label for="balance"> {{ balanceLabel }} </label>
        <input
          type="text"
          class="form-control"
          id="balance"
          placeholder="Enter your new Balance"
          :value="balanceInput"
        />
      </div>
      <hr />
      <button class="btn btn-success" type="button">Enregistrer les modifications</button>
    </form>

    <h6>Theme</h6>
    <hr />
    <div class="d-flex">
      <div class="form-check form-switch mt-3 me-3">
        <label class="form-check-label ms-3" for="lightSwitch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-brightness-high"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
            ></path>
          </svg>
          Dark
        </label>
        <input
          class="form-check-input"
          style=""
          type="checkbox"
          id="lightSwitch"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AccountComponent",
    props: {email : String , balance: Number},
    mounted () {
        this.emailInput = this.email,
        this.balanceInput = this.balance

        console.log(this.emailInput);
    },
    data() {
        return {
            headerTitle : "Informations sur votre compte",
            usernameLabel : "Email",
            balanceLabel : "Montant du compte",
            balanceInput : 0,
            emailInput : null
        }
    },
    created () {
        
    }
};
</script>

<style></style>
