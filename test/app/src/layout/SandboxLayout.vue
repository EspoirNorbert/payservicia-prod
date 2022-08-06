<template>
  <div class="sandbox">
    <div class="text-white bg-success sandboxHeader">
      <h2 class="p-3 text-white"><i class="bi bi-box"></i> Sandbox - Solde du compte du marchand 
      {{ balance == null ? "....loading" : balance}} XOF </h2>
    </div>
    <div class="row">
      <div class="col-md-2">
        <SandBoxMenu />
      </div>
      <div class="col-md-10">
       <div class="container">
          <!-- Hear que sera charger le contenue -->
          <div class="card border-0">
            <div class="card-body">
              <router-view></router-view>
            </div>
          </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import SandBoxMenu from "@/components/SandBoxMenu";
import UserService from '@/services/UserService';

export default {
  name: "SandBoxLayout",
  components: {
    SandBoxMenu
  },
  data() {
      return {
        balance: null
    }
  },
  async created () {
    try { 
      this.balance = (await UserService.getUserInfo()).account.balance;
    } catch (error) {
      
    }
  }
};
</script>

<style scoped>
.sandbox{
  overflow: hidden;
}
.sandboxHeader{
  color: #fff;
  height: 10vh;
}
</style>