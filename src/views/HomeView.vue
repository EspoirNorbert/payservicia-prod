<template>

   <section>   
	   <HomeComponent />
     <div class="page-content">
	    <div class="container">
		    <div class="docs-overview py-5">
			    <div class="row justify-content-center">
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								    
									   <i class="bi bi-person-bounding-box"></i>
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">Creer un compte</span>
							    </h5>
							    <div class="card-text">
								    Un compte vous permettra de faire des transactions et de simuler 
									les paiements pour tester le bon fonctionnement de l'application .
							    </div>
								
							    <routerLink class="card-link-mask" to="/signup"></routerLink>
						    </div><!--//card-body-->
					    </div><!--//card-->
				    </div><!--//col-->
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								          <i class="bi bi-shield-lock"></i>
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">Authentifier</span>
							    </h5>
							    <div class="card-text">
								    Connecter vous a votre compte pour faire des payements .
							    </div>
							    <routerLink class="card-link-mask" to="/login"></routerLink>
						    </div><!--//card-body-->
					    </div><!--//card-->
				    </div><!--//col-->
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								       <i class="bi bi-box"></i>
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">Sandbox</span>
							    </h5>
							    <div class="card-text">
								    Tester les fonctionnalités de payement grace a notre sandbox.
								</div>
							   	 <routerLink class="card-link-mask" to="/user/sandbox"></routerLink>

						    </div><!--//card-body-->
					    </div><!--//card-->
				    </div><!--//col-->
				  
			    </div><!--//row-->
		    </div><!--//container-->
		</div><!--//container-->
    </div>
   </section>
</template>

<script>
import HomeComponent from '@/components/HomeComponent';

export default {
  name: "HomeView",
  components: {
    HomeComponent,
  },
};
</script>
<style scoped>

</style>
