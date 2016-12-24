// // #15video-02: create the new component Fish
// import React from 'react';

// class Fish extends React.Component{
// 	render() {
// 		return(
// 			<li className="menu-fish">🐠</li>
// 		)
// 	}
// }

// export default Fish;

// =========================================
// #15video-06: diplaying the details of each fish, import helper function to format the price
import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component{
	render() {
		const { details } = this.props;

		return(
			<li className="menu-fish">
				<img src={details.image} alt={details.name}/>
				<h3 className="fish-name">
					{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				<button>Add to Order</button>
			</li>
		)
	}
}

export default Fish;
