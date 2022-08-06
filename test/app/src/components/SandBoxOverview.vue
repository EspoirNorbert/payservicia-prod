<template>
  <div class="d-flex justify-content-center">
    <div class="p5 text-center">
      <h2><i class="bi bi-box"></i> Payservica SandBox</h2>
      <p>Bienvenue dans la sandbox de payservicia</p>
     
      <p>
        Vous pouvez effectuer des tests des payements dans cette espace<br />
        De la creation d'utilisateur de test jusqu'a des transactions A chaque
        fois que vous verrez des transactions votre compte sera debit.
      </p>
      <hr />
      <div class="r">
        <div class="row g-4 py-5">
          
          <div class="col-md-12 shadow-sm p-4">
            
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
                <router-link to="/user/sandbox/purchase" class="btn btn-primary d-block">Simuler Achat & payement</router-link>
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
