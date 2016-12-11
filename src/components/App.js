// // #6video-1: create the mark up for App.js component:
// import React from 'react';

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div className="catch-of-the day">
// 				<div className="menu">
// 					<Header />
// 				</div>

// 				<Order />
// 				<Inventory />
// 			</div>
// 		)
// 	}
// }

// export default App;
// // go to index.js

// ======================================================================================================
// // #6video-6: import created components Header, Order, Inventory:
// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div className="catch-of-the day">
// 				<div className="menu">
// 					<Header />
// 				</div>

// 				<Order />
// 				<Inventory />
// 			</div>
// 		)
// 	}
// }

// export default App;
// // go to video 7: passing data with props


// ======================================================================================================
// #7video-1: passing tagline props in header component
import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
	render() {
		return (
			<div className="catch-of-the day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>

				<Order />
				<Inventory />
			</div>
		)
	}
}

export default App;

// ======================================================================================================






















