// // #3video02 create and import StorePicker component
// import React from 'react';

// class StorePicker extends React.Component{
// 	render() {
// 		return <p>Hello</p>
// 	}
// }

// export default StorePicker;

// ======================================================================================================
// // #04video-01 JSX allow us to write html syntax in js, in JSX every element can have only one parents tag:

// import React from 'react';

// class StorePicker extends React.Component{
// 	render() {
// 		return(
// 			<form className="store-selector">
// 				{/* syntax for comment in react, always put your comment in return element or about */}
// 				<h2>Please Enter A Store</h2>
// 				<input type="text" required placeholder="Store name"/>
// 				<button type="submit">Visit Store</button>
// 			</form>
// 		)
// 	}
// }

// export default StorePicker;

// // go to video #5, go to index js

// ======================================================================================================
// #10video-01: using helpers.js functions:
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
	render() {
		return(
			<form className="store-selector">
				{/* syntax for comment in react, always put your comment in return element or about */}
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store name" defaultValue={getFunName()}/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;
// go to video # 11: working with React Events.























