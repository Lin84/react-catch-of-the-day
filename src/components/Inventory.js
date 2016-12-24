// // #6video-5: create Inventory.js component:
// import React from 'react';

// class Inventory extends React.Component {
// 	render() {
// 		return (
// 			<p>Inventory</p>
// 		)
// 	}
// }

// export default Inventory;
// // go to App.js

// // ======================================================================================
// // #13video-01: create the AddFishForm.js component and import that component:
// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h2>Inventory</h2>
// 				<AddFishForm />
// 			</div>
// 		)
// 	}
// }

// export default Inventory;

// // ======================================================================================
// // #13video-08: passinng the addFish method to AddFishForm component
// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h2>Inventory</h2>
// 				<AddFishForm addFish={this.props.addFish}/>
// 			</div>
// 		)
// 	}
// }

// export default Inventory;

// // ======================================================================================
// // #14video-01: call the new method loadSamles that will be created where are our state
// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h2>Inventory</h2>
// 				<AddFishForm addFish={this.props.addFish}/>
// 				<button onClick={this.loadSamples}>Load Sample Fishes</button>
// 			</div>
// 		)
// 	}
// }

// export default Inventory;

// // go to the App.js

// ======================================================================================
// #14video-03: passing loadSamples to button
import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	render() {
		return (
			<div>
				<h2>Inventory</h2>
				<AddFishForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
			</div>
		)
	}
}

export default Inventory;

// continue in video #15: displaying data with JSX, go to App.js, and create the new Fish component