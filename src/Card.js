import React,{Component} from 'react';
import CardsUI from './CardsUI'


class Cards extends Component{
	render(){
	return(
		<>

				<div className="container-fluid d-flex justify-content-center align-items-center">
				

				
				<div className="row">
						

					<div className="col-md-4">
						<CardsUI imgsrc='./images/blacktea.jpg' title="Black Tea" p="Black tea is a great option if you are looking for a low-calorie, non-sweetened beverage with less caffeine than coffee or energy drinks."/>
					</div>
					<div className="col-md-4">
						<CardsUI imgsrc='./images/greentea.jpg' title="Green Tea" p="Green tea as a beverage or dietary supplement is promoted for improving mental alertness, relieving digestive symptoms and weight loss."/>
					</div>
					<div className="col-md-4">
						<CardsUI imgsrc='./images/oolongtea.jpg' title="Oolong Tea" p="Oolong tea is used to improve mental alertness. It is also used for obesity and heart disease, to prevent weak and brittle bones (osteoporosis)." />
					</div>
				</div>

			</div>
			
		</>
		)
	}

}
export default Cards;