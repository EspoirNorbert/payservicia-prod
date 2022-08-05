<template>
   <div class="d-flex justify-content-center">
                <div class="p5 text-center">
                  <h2>Payservica SandBox</h2>
                  <p>Bienvenue dans la sandbox de payservicia</p>
                  <p>
                    Vous pouvez effectuer des tests des payements dans cette
                    espace<br />
                    De la creation d'utilisateur de test jusqu'a des
                    transactions A chaque fois que vous verrez des transactions
                    votre compte sera debit.
                  </p>
                  <hr />
                  <div class="r">
                    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                      <div class="col d-flex align-items-start">
                        <div
                          class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
                        >
                          <svg class="bi" width="1em" height="1em">
                            <use xlink:href="#toggles2"></use>
                          </svg>
                        </div>
                        <div>
                          <h2>Creation des clients</h2>
                          <p>
                            Les clients sont des utilisateurs test qui vont vous
                            permettre faire des transactions
                          </p>
                          <a href="#" class="btn btn-primary">
                            Primary button
                          </a>
                        </div>
                      </div>
                      <div class="col d-flex align-items-start">
                        <div
                          class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
                        >
                          <svg class="bi" width="1em" height="1em">
                            <use xlink:href="#cpu-fill"></use>
                          </svg>
                        </div>
                        <div>
                          <h2>Transactions</h2>
                          <p>
                            Les transactions representent les payements
                            effectuer par un utilisateurs test
                          </p>
                          <a href="#" class="btn btn-primary">
                            Primary button
                          </a>
                        </div>
                      </div>
                      <div class="col d-flex align-items-start">
                        <div
                          class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
                        >
                          <svg class="bi" width="1em" height="1em">
                            <use xlink:href="#tools"></use>
                          </svg>
                        </div>
                        <div>
                          <h2>Achat et payement</h2>
                          <p>
                            Paragraph of text beneath the heading to explain the
                            heading. We'll add onto it with another sentence and
                            probably just keep going until we run out of words.
                          </p>
                          <a href="#" class="btn btn-primary">
                            Primary button
                          </a>
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
    props: {
        
    }
}
</script>