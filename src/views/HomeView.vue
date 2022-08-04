<template>

   <section>   <HomeComponent />
     <div class="page-content">
	    <div class="container">
		    <div class="docs-overview py-5">
			    <div class="row justify-content-center">
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <svg class="svg-inline--fa fa-signs-post" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="signs-post" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M223.1 32C223.1 14.33 238.3 0 255.1 0C273.7 0 288 14.33 288 32H441.4C445.6 32 449.7 33.69 452.7 36.69L500.7 84.69C506.9 90.93 506.9 101.1 500.7 107.3L452.7 155.3C449.7 158.3 445.6 160 441.4 160H63.1C46.33 160 31.1 145.7 31.1 128V64C31.1 46.33 46.33 32 63.1 32L223.1 32zM480 320C480 337.7 465.7 352 448 352H70.63C66.38 352 62.31 350.3 59.31 347.3L11.31 299.3C5.065 293.1 5.065 282.9 11.31 276.7L59.31 228.7C62.31 225.7 66.38 223.1 70.63 223.1H223.1V191.1H288V223.1H448C465.7 223.1 480 238.3 480 255.1V320zM255.1 512C238.3 512 223.1 497.7 223.1 480V384H288V480C288 497.7 273.7 512 255.1 512z"></path></svg><!-- <i class="fas fa-map-signs"></i> Font Awesome fontawesome.com -->
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">Introduction</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
							    </div>
							    <a class="card-link-mask" href="docs-page.html#section-1"></a>
						    </div><!--//card-body-->
					    </div><!--//card-->
				    </div><!--//col-->
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <svg class="svg-inline--fa fa-arrow-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path></svg><!-- <i class="fas fa-arrow-down"></i> Font Awesome fontawesome.com -->
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">Installation</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
							    </div>
							    <a class="card-link-mask" href="docs-page.html#section-2"></a>
						    </div><!--//card-body-->
					    </div><!--//card-->
				    </div><!--//col-->
				    <div class="col-12 col-lg-4 py-3">
					    <div class="card shadow-sm">
						    <div class="card-body">
							    <h5 class="card-title mb-3">
								    <span class="theme-icon-holder card-icon-holder me-2">
								        <svg class="svg-inline--fa fa-box fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M50.73 58.53C58.86 42.27 75.48 32 93.67 32H208V160H0L50.73 58.53zM240 160V32H354.3C372.5 32 389.1 42.27 397.3 58.53L448 160H240zM448 416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V192H448V416z"></path></svg><!-- <i class="fas fa-box fa-fw"></i> Font Awesome fontawesome.com -->
							        </span><!--//card-icon-holder-->
							        <span class="card-title-text">APIs</span>
							    </h5>
							    <div class="card-text">
								    Section overview goes here. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.						    
								</div>
							    <a class="card-link-mask" href="docs-page.html#section-3"></a>
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
