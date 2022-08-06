<template>
		<div class="row align-items-center justify-content-center g-0 min-vh-100 ">
			<div class="col-lg-5 col-md-8 py-8 py-xl-0">
				<!-- Card -->
				<div class="card shadow">
					<!-- Card body -->
					<div class="card-body p-6">
						<div class="mb-4">
             <h3 class="text-primary text-center mb-1">
                <i class="bi bi-person-circle"></i> Vous avez oublié votre mot de passe ?
              </h3>
							<p>Entrez votre adresse e-mail et nous vous enverrons la marche à suivre pour réinitialiser votre mot de passe.</p>
						</div>
							<!-- Form -->
						<form>
								<!-- Email -->
							<div class="mb-3">
								<label for="email" class="form-label">Email</label>
								<input type="email" id="email" class="form-control" name="email" placeholder="Enter Your Email " required="">
							</div>
								<!-- Button -->
							<div class="mb-3 d-grid">
								<button type="button" class="btn btn-primary">
								 Renitialiser le mot de passe
								</button>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
	
</template>

<script>
export default {
  name: "PasswordForgetView",
  components: {
    //HelloWorld,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-gap {
  padding-top: 70px;
}
</style>
