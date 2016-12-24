// // #3video02 create and import StorePicker component
// import React from 'react';

// class StorePicker extends React.Component{
// 	render() {
// 		return <p>Hello</p>
// 	}
// }

// export default StorePicker;


// ========================================================================
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


// ========================================================================
// // #10video-01: using helpers.js functions:
// import React from 'react';
// import { getFunName } from '../helpers';

// class StorePicker extends React.Component{
// 	render() {
// 		return(
// 			<form className="store-selector">
// 				{ syntax for comment in react, always put your comment in return element or about }
// 				<h2>Please Enter A Store</h2>
// 				<input type="text" required placeholder="Store name" defaultValue={getFunName()}/>
// 				<button type="submit">Visit Store</button>
// 			</form>
// 		)
// 	}
// }

// export default StorePicker;
// // go to video # 11: working with React Events.


// // ========================================================================
// // #11video-01: add the onsubmit event and create the goToStore() method
// import React from 'react';
// import { getFunName } from '../helpers';

// class StorePicker extends React.Component{


// 	goToStore(event) {
// 		event.preventDefault();
// 		console.log('you changed the URL');
// 		// first grap the text from the box
// 		// second transition from / to /store/:storeId

// 	}

// 	render() {
// 		return(
// 			<form className="store-selector" onSubmit={this.goToStore}>
// 				{/* syntax for comment in react, always put your comment in return element or about */}
// 				<h2>Please Enter A Store</h2>
// 				<input type="text" required placeholder="Store name" defaultValue={getFunName()}/>
// 				<button type="submit">Visit Store</button>
// 			</form>
// 		)
// 	}
// }

// export default StorePicker;


// // ========================================================================
// // #11video-02: create the storeInput to get the value of input, in the react try to avoid touching DOM directly, you can select the input using function in ref for example.
// import React from 'react';
// import { getFunName } from '../helpers';

// class StorePicker extends React.Component{


// 	goToStore(event) {
// 		event.preventDefault();
// 		console.log('you changed the URL');
// 		// first grap the text from the box
// 		// second transition from / to /store/:storeId

// 	}

// 	render() {
// 		return(
// 			<form className="store-selector" onSubmit={this.goToStore}>
// 				{/* syntax for comment in react, always put your comment in return element or about */}
// 				<h2>Please Enter A Store</h2>
// 				<input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
// 				<button type="submit">Visit Store</button>
// 			</form>
// 		)
// 	}
// }

// export default StorePicker;

// // ========================================================================
// // #11video-03: Binding the new method to the extend class:
// import React from 'react';
// import { getFunName } from '../helpers';

// class StorePicker extends React.Component{
// 	constructor() {
// 		super();
// 		this.goToStore = this.goToStore.bind(this);
// 	}

// 	goToStore(event) {
// 		event.preventDefault();
// 		console.log('you changed the URL');
// 		// first grap the text from the box
// 		console.log(this.storeInput.value);
// 		// second transition from / to /store/:storeId

// 	}

// 	render() {
// 		return(
// 			<form className="store-selector" onSubmit={this.goToStore}>
// 				{/* syntax for comment in react, always put your comment in return element or about */}
// 				<h2>Please Enter A Store</h2>
// 				<input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
// 				<button type="submit">Visit Store</button>
// 			</form>
// 		)
// 	}
// }

// export default StorePicker;

// // or you can bind new method to extend class directly in render:
// // <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
// // go to the #12 video


// // ========================================================================
// // #12video-01: create the contextTypes to get the access to the router
// import React from 'react';
// import { getFunName } from '../helpers';

// class StorePicker extends React.Component{
// 	constructor() {
// 		super();
// 		this.goToStore = this.goToStore.bind(this);
// 	}

// 	goToStore(event) {
// 		event.preventDefault();
// 		console.log('you changed the URL');
// 		// first grap the text from the box
// 		console.log(this.storeInput.value);
// 		// second transition from / to /store/:storeId

// 	}

// 	render() {
// 		return(
// 			<form className="store-selector" onSubmit={this.goToStore}>
// 				{/* syntax for comment in react, always put your comment in return element or about */}
// 				<h2>Please Enter A Store</h2>
// 				<input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
// 				<button type="submit">Visit Store</button>
// 			</form>
// 		)
// 	}
// }

// StorePicker.contextTypes = {
// 	router: React.PropTypes.object
// }

// export default StorePicker;

// ========================================================================
// #12video-02: add the new methond from context = transitionTo()
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(event) {
		event.preventDefault();
		console.log('you changed the URL');
		// first grap the text from the box
		console.log(this.storeInput.value);
		const storeId = this.storeInput.value;
		// second transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);

	}

	render() {
		return(
			<form className="store-selector" onSubmit={(e) => {this.goToStore(e)}}>
				{/* syntax for comment in react, always put your comment in return element or about */}
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;
// go to #13video = to understand state and go to Inventory.js
