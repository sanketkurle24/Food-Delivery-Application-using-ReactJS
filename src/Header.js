import React from 'react';

function Header(){
	
	return(
		<>
		<header>
			<section className="container main-hero-container">
			
			<br />
				<div className="row">
					<div className="col-12 col-lg-6 header-left-side d-flex flex-column justify-content-center ">
						<p className="main-hero-para">
							Multiple Brands of Refreshing Tea & Coffee, Delivered To Your Desk At Work Or At Home
						</p>
							
						<div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search about Tea Shop, Brand, Tea Types" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  								<div class="input-group-append">
   							    	<button class="btn btn-outline-secondary" type="button">Search</button>
  								</div>
							</div>


					</div>
					<div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
						<img src="./images/1.jpg" alt="" className="img-fluid" />
						<img src="./images/4.jpg" alt="" className="img-fluid main-herosection-img2" />
					</div>
					


				</div>
				

			
			</section>

		</header>
		

			

		</>
	)
}
 export default Header;