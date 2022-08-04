<template>
  <div class="home">
    <div class="container">
      <div class="card mt-4 mb-4">
        <div class="card-header text-white bg-success">
          <h2>Sandbox</h2>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-2">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">Menu</h5>
                  <small class="text-center"
                    >Bienvenue dans un votre sandbox pour tester l'api de
                    paiement
                  </small>
                </div>
                <div class="card-body p-0">
                  <div
                    class="nav flex-column nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      class="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Home
                    </button>
                    <button
                      class="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      Customers
                    </button>
                    <button
                      class="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      Produits
                    </button>
                     <button
                      class="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-create"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-create"
                      aria-selected="false"
                    >
                    Creer un client de test
                    </button>
                  </div>
                </div>
              </div>
              <!-- account -->
              <div class="card mt-3">
                <div class="card-header">
                  <h5 class="card-title">Votre compte</h5>
                  <small class="text-center"
                    >Vous verez les details du compte ici
                  </small>
                </div>
                <div class="card-body">
                  <p>Balance <strong> {{auth.account.balance}}  </strong> FCFA</p>
                </div>
              </div>
              <!-- account -->
            </div>
            <div class="col-md-10">
              <div class="card">
                <div class="card-header">
                  <h3>Overview</h3>
                </div>
                <div class="card-body">
                  <div class="text-center">
                    <div class="">
                      <div class="tab-content" id="v-pills-tabContent">
                        <div
                          class="tab-pane fade show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <h3>
                            <small> Payservica SandBox</small>
                          </h3>
                          <p>
                            Vous pouvez effectuer des tests des payements dans
                            cette espace <br />
                            De la creation d'utilisateur de test jusqu'a des
                            transactions A chaque fois que vous verrez des
                            transactions votre compte sera debit .
                          </p>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                      

                       <TableCustomer />
                        </div>

                        <div
                          class="tab-pane fade"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          <Produit />
                        </div>

                          <div
                          class="tab-pane fade"
                          id="v-pills-create"
                          role="tabpanel"
                          aria-labelledby="v-pills-create-tab"
                        >
                          <FormCustomer />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Produit from "@/components/Produit";
import FormCustomer from '@/components/FormCustomer'
import TableCustomer from '@/components/TableCustomer'
import UserService from '@/services/UserService'

export default {
  name: "SandBoxView",
  components: {
    //HelloWorld,
    Produit,
    FormCustomer,
    TableCustomer
  },
  data() {
    return {
      customers: [],
      auth : null,
    };
  },
  mounted() {
      this.getConnectUser();
  },
  methods: {
    async getConnectUser() {
      this.auth= await UserService.getUserInfo();
    }
  }
};
</script>
<style scoped>

.title {
  height: 8px;
  background-color: #ffff;
}
</style>
