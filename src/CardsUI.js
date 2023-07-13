import React from 'react';

const CardsUI = props=>{
	return(
		<>
		
		<section className="container main-hero-container">
		
		<div className="card text-center shadow">
			<div className='overflow'>
				<img src={props.imgsrc} alt="blacktea" className="card-img-top"/>
				
			</div>
			<div className="card-body text-dark">
				<h4 className="card-title"> {props.title} </h4>
				<p className="card-text text-secondary">{props.p} </p>
				
		</div>
		</div>
		</section>
	

		
		</>
	)
}
export default CardsUI;