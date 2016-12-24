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

// // =========================================
// // #15video-06: diplaying the details of each fish, import helper function to format the price
// import React from 'react';
// import { formatPrice } from '../helpers';

// class Fish extends React.Component{
// 	render() {
// 		const { details } = this.props;

// 		return(
// 			<li className="menu-fish">
// 				<img src={details.image} alt={details.name}/>
// 				<h3 className="fish-name">
// 					{details.name}
// 					<span className="price">{formatPrice(details.price)}</span>
// 				</h3>
// 				<p>{details.desc}</p>
// 				<button>Add to Order</button>
// 			</li>
// 		)
// 	}
// }

// export default Fish;

// // continue in video #16: updating order state

// // =========================================
// // #16video-01: updating the state of the button Add to Order, create new variables: isAvailable, buttonText:

// import React from 'react';
// import { formatPrice } from '../helpers';

// class Fish extends React.Component{
// 	render() {
// 		const { details } = this.props;
// 		const isAvailable = details.status === 'available';
// 		const buttonText = isAvailable ? 'Add to Order' : 'Solr Out!'

// 		return(
// 			<li className="menu-fish">
// 				<img src={details.image} alt={details.name}/>
// 				<h3 className="fish-name">
// 					{details.name}
// 					<span className="price">{formatPrice(details.price)}</span>
// 				</h3>
// 				<p>{details.desc}</p>
// 				<button disabled={!isAvailable}>{buttonText}</button>
// 			</li>
// 		)
// 	}
// }

// export default Fish;
// // go to App.js to create the new method AddToOrder method

// // =========================================
// // #16video-04: on lick add to order new event

// import React from 'react';
// import { formatPrice } from '../helpers';

// class Fish extends React.Component{
// 	render() {
// 		const { details } = this.props;
// 		const isAvailable = details.status === 'available';
// 		const buttonText = isAvailable ? 'Add to Order' : 'Solr Out!'

// 		return(
// 			<li className="menu-fish">
// 				<img src={details.image} alt={details.name}/>
// 				<h3 className="fish-name">
// 					{details.name}
// 					<span className="price">{formatPrice(details.price)}</span>
// 				</h3>
// 				<p>{details.desc}</p>
// 				<button onClick={this.props.AddToOrder} disabled={!isAvailable}>{buttonText}</button>
// 			</li>
// 		)
// 	}
// }

// export default Fish;
// // go to App.js to get the access to the key = create new props = index in Fish

// =========================================
// #16video-06: add

import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component{
	render() {
		const { details, index } = this.props;
		const isAvailable = details.status === 'available';
		const buttonText = isAvailable ? 'Add to Order' : 'Solr Out!';

		return(
			<li className="menu-fish">
				<img src={details.image} alt={details.name}/>
				<h3 className="fish-name">
					{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				<button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
			</li>
		)
	}
}

export default Fish;
// go to video #17: displaying the order state with JSX
// go to App.js
