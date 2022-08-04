<template>
  <div class="home">
    <div class="container">
      <div class="card mt-4 mb-4">
        <div class="card-header bg-success">
          <div class="card-title text-white"><h2>Settings</h2></div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4">
              <AccountComponent 
              v-if="user!=null"
              :email="user.email"
              :balance="user.account.balance"
              />
            </div>
            <div class="col-md-8">
              <profil-component
              v-if="user!=null"
              :firstName="user.profil.firstName"
              :lastName="user.profil.lastName"
              :country="user.profil.country"
              :age="user.profil.age"
              @updateProfilEvent="updateProfil($event)"
              ></profil-component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AccountComponent from '@/components/AccountComponent';
import ProfilComponent from '@/components/ProfilComponent';
import UserService from '@/services/UserService';

export default {
  name: "SettingView",
  components: {
    AccountComponent,
    ProfilComponent
  },
  data() {
    return {
      user : null,
    };
  } , 
  async mounted () {
      this.getUser();
  },
  methods: {
    async getUser() {
        this.user = await UserService.getUserInfo();
    },
    async updateProfil(data){

      const response = await UserService.updateUserProfil(data);

      if (response.code == "200"){
        this.$toasted.info("Profil mise a jour avec success");
        this.getUser();
      }
      
    }
  },
  updated () {
    console.log("Updated call");
  }
};
</script>
