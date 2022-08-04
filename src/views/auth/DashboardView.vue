<template>
<div class="container mt-5 mb-5">
          <!-- create header -->
          <div class="card mb-3">
              <div class="card-header bg-success card-dashboard" >
                <div class="card-title mt-5">
                <h1 class="text-white"> {{ msg }} </h1>
                <div style="font-size: 1.375rem;font-weight: 400; line-height: 1.75rem;color: #fff;">
                   {{ user != null ? user.email : "...loading" }} </div>
                </div>
              </div>
            
              <!-- card footer -->
              <div class="card-footer bg-white">

                <div class="card-footer-student">
                    <p><strong> {{ accountBalance }} </strong> 
                     {{ user != null ? user.account.balance : "...loading" }} FCFA </p>
                </div>

                              
            </div>
          </div>
          <!-- end create header -->

          <!-- create row 1 -->
          <div class="row mb-3">
            <!-- create 6 colums -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header bg-success">
                  <h3 class="text-white"><i class="fa fa-graduation-cap" aria-hidden="true"></i> API REST</h3>
                </div>
                <div class="card-body">
                  <!-- read to for introduise students -->
                  <p>Dans l'onglet  <strong> {{apiText}} </strong> 
                    vous pouvez consulter la documentation sur l'API de payement </p>
                  <hr>
                </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="card">
                <div class="card-header bg-success">
                  <h3 class="text-white"> <i class="fa fa-user" aria-hidden="true"></i> {{settingText}}</h3>
                </div>
                <div class="card-body">
                <p>Dans l'onglet  <strong> {{settingText}} </strong> 
                  vous pouvez changer le theme du dashboard en dark ou en light et modifier vos informations </p>
                </div>
              </div>
          </div>
        </div>
        <!-- end create row 1 -->

          <!-- create row 1 -->
          <div class="row mb-3">
            <!-- create 6 colums -->
            <div class="col-md-6">
              <div class="card">
                <div class="card-header bg-success">
                  <h3 class="text-white"><i class="fa fa-graduation-cap" aria-hidden="true"></i>  {{sandboxText}} </h3>
                </div>
                <div class="card-body">
                  <!-- read to for introduise students -->
                  <p>Dans l'onglet  <strong> {{sandboxText}} </strong> 
                    vous pouvez faire des tests de payement en choissant des articles et en creants 
                    des utilisateurs tests
                     </p>
                  <hr>
                </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="card">
                <div class="card-header bg-success">
                  <h3 class="text-white"> <i class="fa fa-user" aria-hidden="true"></i> {{logoutText}}</h3>
                </div>
                <div class="card-body">
                <p>Dans l'onglet  <strong> {{logoutText}} </strong> 
                  vous pouvez vous deconnecter de votre compte </p>
                </div>
              </div>
          </div>
        </div>
        <!-- end create row 1 -->

    </div>
</template>
<script>
import AuthService from '@/services/AuthService';
import UserService from '@/services/UserService';

export default {
  name: "DashboardView",
  components: {
    //HelloWorld
  },
  data() {
    return {
      token : null,
      user : null,
      settingText : "Settings",
      apiText : "API REST",
      sandboxText : "SandBox",
      logoutText : "Deconnexion",
      msg: "Bienvenue dans votre dashboard",
      accountBalance: "Solde du compte"
    }
  },
  beforeMount () {
    console.log('Call before to mount');
  },
  mounted () {
      this.token = AuthService.getAuthToken();
      this.getUser();
  },
  methods: {
    async getUser() {
        this.user = await UserService.getUserInfo();
        console.log(this.user);
    }
  } ,
  watch: {
    $route (to, from) {
      this.getUser()
    }
  }
};
</script>
<style scoped>
.card-dashboard {
  
  background-image: url("https://gstatic.com/classroom/themes/img_bookclub.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  width: 100%
}
</style>