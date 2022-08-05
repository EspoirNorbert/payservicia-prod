<template>
  <div class="d-flex justify-content-center">
    <div class="p5 text-center">
      <h2>Payservica SandBox</h2>
      <p>Bienvenue dans la sandbox de payservicia</p>
      <p>
        Vous pouvez effectuer des tests des payements dans cette espace<br />
        De la creation d'utilisateur de test jusqu'a des transactions A chaque
        fois que vous verrez des transactions votre compte sera debit.
      </p>
      <hr />
      <div class="r">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col shadow-sm p-4">
            <div>
              <h4><i class="bi bi-people"></i> Creation des clients</h4>
              <p class="text-start">
                Les clients sont des utilisateurs test qui feront des payements sur votre compte marchand.
              </p>
              <router-link to="sandbox/customers/create" class="btn btn-primary d-block">Creer un client</router-link>
            </div>
          </div>
          <div class="col-md-4 shadow-sm p-4">
              <div>
              <h4><i class="bi bi-wallet"></i> Transactions</h4>
              <p class="text-start">
                Les transactions representent les payements effectuer par un utilisateurs test
              </p>
              <router-link to="sandbox/transactions" class="btn btn-primary d-block">Voir les transactions</router-link>
            </div>
          </div>
          
          <div class="col-md-4 shadow-sm p-4">
            
            <div>
              <h4>   <i class="bi bi-credit-card"></i> Achat et payement</h4>
              <p class="text-start">
                Pour simuler un achat et puis faire un payement. il faut les etapes suivantes
                <ol>
                  <li>Choisir le client (selectionner le client de votre choix) </li>
                  <li>Choisir les articles (selectionner les articles à payer) </li>
                  <li>Valider les articles puis payer et voir les details de la transaction</li>
                </ol>
              </p>
                <router-link to="sandbox/purchase" class="btn btn-primary d-block">Simuler Achat & payement</router-link>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SandBoxOverview",
  props: {},
};
</script>
