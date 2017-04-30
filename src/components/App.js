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

// ===========================================================================
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


// ===========================================================================
// // #7video-1: passing tagline props in header component
// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 				</div>

// 				<Order />
// 				<Inventory />
// 			</div>
// 		)
// 	}
// }

// export default App;

// // ===========================================================================
// // #13video-04:  constructor() and initial the state
// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';

// class App extends React.Component {
// 	constructor() {
// 		super();

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 				</div>

// 				<Order />
// 				<Inventory />
// 			</div>
// 		)
// 	}
// }

// export default App;


// // ===========================================================================
// // #13video-05: create new method addFish(), in react is better instead to update straight the state is better to create the copy of state first = for perfomance purpose
// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';

// class App extends React.Component {
// 	constructor() {
// 		super();

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish() {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		//set state
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 				</div>

// 				<Order />
// 				<Inventory />
// 			</div>
// 		)
// 	}
// }

// export default App;

// // ===========================================================================
// // #13video-06: usint time stamp to make each fish unique, and setState to update the state of fishes

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 				</div>

// 				<Order />
// 				<Inventory />
// 			</div>
// 		)
// 	}
// }

// export default App;

// // ===========================================================================
// // #13video-07: passing the addFish as prop to Inventory component

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 				</div>

// 				<Order />
// 				<Inventory addFish={this.addFish}/>
// 			</div>
// 		)
// 	}
// }

// export default App;

// // continue in Inventory.js component

// // ===========================================================================
// // #14video-02: create new method loadSamples and pass it down to Inventory, import sampleFishes

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 				</div>

// 				<Order />
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;

// // continue in the Inventory component

// // ===========================================================================
// // #15video-01: create the new Fish component and import it here and render it out

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						<Fish />
// 					</ul>
// 				</div>

// 				<Order />
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;

// // ===========================================================================
// // #15video-03: using Object.keys() to create a array of the key of the fishes and to loop through the fishes using map() after that

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish />)
// 						}
// 					</ul>
// 				</div>

// 				<Order />
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;

// // ===========================================================================
// // #15video-04: in console log you can see the error, in React need to be each fish has unique key

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} />)
// 						}
// 					</ul>
// 				</div>

// 				<Order />
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;

// // ===========================================================================
// // #15video-05: passing the details props in fishes

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)
// 						}
// 					</ul>
// 				</div>

// 				<Order />
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;
// // go to the Fish Component

// // ===========================================================================
// // #16video-02: added new method addToOrder method:

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)
// 						}
// 					</ul>
// 				</div>

// 				<Order />
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;

// // ===========================================================================
// // #16video-03: passing the addToOrder method to Fish component

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} addToOrder = {this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order />
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;
// // go to Fish.js

// // ===========================================================================
// // #16video-05: create new props to get key value = index

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order />
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;
// // go to Fish

// ===========================================================================
// #17video-01: passing pros: fishes, order

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order fishes={this.state.fishes} order={this.state.order}/>
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;
// // go to Order.js

// ===========================================================================
// #18video-01: using firebase.com, create in src base.js, and import it in App.js

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import Base from '../base';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order fishes={this.state.fishes} order={this.state.order}/>
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;

// // ===========================================================================
// // #18video-02: using componentWillMount()

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import base from '../base';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	componentWillMount() {
// 		this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
// 			context: this,
// 			state: 'fishes '
// 		});
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order fishes={this.state.fishes} order={this.state.order}/>
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;

// ===========================================================================
// #18video-03: using componentWillUnmount()

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import base from '../base';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	componentWillMount() {
// 		this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
// 		{
// 			context: this,
// 			state: 'fishes'
// 		});
// 	}

// 	componentWillUnmount(){
// 		base.removeBinding(this.ref);
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order fishes={this.state.fishes} order={this.state.order}/>
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;
// constinue with video #19: persisting order state with localstorage

// ===========================================================================
// #19video-01: add new method componentWillUpdate, and pass all params to order, in localStorage you can not store object, only string is allowed = use JSON.stringify()

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import base from '../base';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	componentWillMount() {
// 		this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
// 		{
// 			context: this,
// 			state: 'fishes'
// 		});
// 	}

// 	componentWillUnmount(){
// 		base.removeBinding(this.ref);
// 	}

// 	componentWillUpdate(nextProps, nextState) {
// 		localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order
// 					fishes={this.state.fishes}
// 					order={this.state.order}
// 					params={this.props.params}
// 				/>
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;

// ===========================================================================
// #19video-02: check if any order is in localStorages in componentWillMount

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import base from '../base';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	componentWillMount() {
// 		// this run right before App.js is rendered
// 		this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
// 		{
// 			context: this,
// 			state: 'fishes'
// 		});
// 		// check if there is any order in localStorage:
// 		const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
// 		if(localStorageRef) {
// 			// udpate our App.js component's order state
// 			this.setState({
// 				order: JSON.parse(localStorageRef)
// 			})
// 		}
// 	}

// 	componentWillUnmount(){
// 		base.removeBinding(this.ref);
// 	}

// 	componentWillUpdate(nextProps, nextState) {
// 		localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order
// 					fishes={this.state.fishes}
// 					order={this.state.order}
// 					params={this.props.params}
// 				/>
// 				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
// 			</div>
// 		)
// 	}
// }

// export default App;
// next video #20

// ===========================================================================
// #20video-01: pass down the fishes props to Inventory component

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import base from '../base';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	componentWillMount() {
// 		// this run right before App.js is rendered
// 		this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
// 		{
// 			context: this,
// 			state: 'fishes'
// 		});
// 		// check if there is any order in localStorage:
// 		const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
// 		if(localStorageRef) {
// 			// udpate our App.js component's order state
// 			this.setState({
// 				order: JSON.parse(localStorageRef)
// 			})
// 		}
// 	}

// 	componentWillUnmount(){
// 		base.removeBinding(this.ref);
// 	}

// 	componentWillUpdate(nextProps, nextState) {
// 		localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it :D
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order
// 					fishes={this.state.fishes}
// 					order={this.state.order}
// 					params={this.props.params}
// 				/>
// 				<Inventory
// 					addFish={this.addFish}
// 					loadSamples={this.loadSamples}
// 					fishes={this.state.fishes}
// 				/>
// 			</div>
// 		)
// 	}
// }

// export default App;
// go to Inventory

// ===========================================================================
// #20video-04: new method updatedFish and pass it down to Inventory component

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import base from '../base';

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.addFish = this.addFish.bind(this);
// 		this.loadSamples = this.loadSamples.bind(this);
// 		this.addToOrder = this.addToOrder.bind(this);
// 		this.updatedFish = this.updatedFish.bind(this);

// 		//getInitial state
// 		this.state = {
// 			fishes: {},
// 			order: {}
// 		};
// 	}

// 	componentWillMount() {
// 		// this run right before App.js is rendered
// 		this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
// 		{
// 			context: this,
// 			state: 'fishes'
// 		});
// 		// check if there is any order in localStorage:
// 		const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
// 		if(localStorageRef) {
// 			// udpate our App.js component's order state
// 			this.setState({
// 				order: JSON.parse(localStorageRef)
// 			})
// 		}
// 	}

// 	componentWillUnmount(){
// 		base.removeBinding(this.ref);
// 	}

// 	componentWillUpdate(nextProps, nextState) {
// 		localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
// 	}

// 	addFish(fish) {
// 		// update our state
// 		const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it
// 		// add in our new fish
// 		const timestamp = Date.now();
// 		fishes[`fish-${timestamp}`] = fish;
// 		//set state
// 		// this.setState( {fishes: fishes} );
// 		// or:
// 		this.setState({fishes});
// 	}

// 	updatedFish(key, updatedFish) {
// 		const fishes = {...this.state.fishes};
// 		fishes[key] = updatedFish;
// 		this.setState({ fishes });
// 	}

// 	loadSamples() {
// 		this.setState({
// 			fishes: sampleFishes
// 		})
// 	}

// 	addToOrder(key) {
// 		// copy the current state of order
// 		const order = {...this.state.order};
// 		// update or add new number of fish to order
// 		order[key] = order[key] + 1 || 1;
// 		// update our state of order
// 		this.setState({ order });
// 	}

// 	render() {
// 		return (
// 			<div className="catch-of-the-day">
// 				<div className="menu">
// 					<Header tagline="Fresh Seafood Market" />
// 					<ul className="list-of-fishes">
// 						{
// 							Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
// 						}
// 					</ul>
// 				</div>

// 				<Order
// 					fishes={this.state.fishes}
// 					order={this.state.order}
// 					params={this.props.params}
// 				/>
// 				<Inventory
// 					addFish={this.addFish}
// 					loadSamples={this.loadSamples}
// 					fishes={this.state.fishes}
// 					updatedFish={this.updatedFish}
// 				/>
// 			</div>
// 		)
// 	}
// }

// export default App;
// go to Inventory.js

// ===========================================================================
// #21video-01: delete state init, add removeFish() and pass to inventory

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import base from '../base';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.addFish = this.addFish.bind(this);
//         this.removeFish = this.removeFish.bind(this);
//         this.loadSamples = this.loadSamples.bind(this);
//         this.addToOrder = this.addToOrder.bind(this);
//         this.updatedFish = this.updatedFish.bind(this);

//         //getInitial state
//         this.state = {
//             fishes: {},
//             order: {}
//         };
//     }

//     componentWillMount() {
//         // this run right before App.js is rendered
//         this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
//         {
//             context: this,
//             state: 'fishes'
//         });
//         // check if there is any order in localStorage:
//         const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
//         if(localStorageRef) {
//             // udpate our App.js component's order state
//             this.setState({
//                 order: JSON.parse(localStorageRef)
//             })
//         }
//     }

//     componentWillUnmount(){
//         base.removeBinding(this.ref);
//     }

//     componentWillUpdate(nextProps, nextState) {
//         localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
//     }

//     addFish(fish) {
//         // update our state
//         const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it
//         // add in our new fish
//         const timestamp = Date.now();
//         fishes[`fish-${timestamp}`] = fish;
//         //set state
//         // this.setState( {fishes: fishes} );
//         // or:
//         this.setState({fishes});
//     }

//     updatedFish(key, updatedFish) {
//         const fishes = {...this.state.fishes};
//         fishes[key] = updatedFish;
//         this.setState({ fishes });
//     }

//     removeFish(key) {
//         const fishes = {...this.state.fishes};
//         fishes[key] = null;
//         this.setState({ fishes });
//     }

//     loadSamples() {
//         this.setState({
//             fishes: sampleFishes
//         })
//     }

//     addToOrder(key) {
//         // copy the current state of order
//         const order = {...this.state.order};
//         // update or add new number of fish to order
//         order[key] = order[key] + 1 || 1;
//         // update our state of order
//         this.setState({ order });
//     }

//     render() {
//         return (
//             <div className="catch-of-the-day">
//                 <div className="menu">
//                     <Header tagline="Fresh Seafood Market" />
//                     <ul className="list-of-fishes">
//                         {
//                             Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
//                         }
//                     </ul>
//                 </div>

//                 <Order
//                     fishes={this.state.fishes}
//                     order={this.state.order}
//                     params={this.props.params}
//                 />
//                 <Inventory
//                     addFish={this.addFish}
//                     loadSamples={this.loadSamples}
//                     fishes={this.state.fishes}
//                     updatedFish={this.updatedFish}
//                     removeFish={this.removeFish}
//                 />
//             </div>
//         )
//     }
// }

// export default App;
// go to Inventory.js

// // ===========================================================================
// // #21video-03: add remove fish from order

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import base from '../base';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.addFish = this.addFish.bind(this);
//         this.removeFish = this.removeFish.bind(this);
//         this.removeFromOrder = this.removeFromOrder.bind(this);
//         this.loadSamples = this.loadSamples.bind(this);
//         this.addToOrder = this.addToOrder.bind(this);
//         this.updatedFish = this.updatedFish.bind(this);

//         //getInitial state
//         this.state = {
//             fishes: {},
//             order: {}
//         };
//     }

//     componentWillMount() {
//         // this run right before App.js is rendered
//         this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
//         {
//             context: this,
//             state: 'fishes'
//         });
//         // check if there is any order in localStorage:
//         const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
//         if(localStorageRef) {
//             // udpate our App.js component's order state
//             this.setState({
//                 order: JSON.parse(localStorageRef)
//             })
//         }
//     }

//     componentWillUnmount(){
//         base.removeBinding(this.ref);
//     }

//     componentWillUpdate(nextProps, nextState) {
//         localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
//     }

//     addFish(fish) {
//         // update our state
//         const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it
//         // add in our new fish
//         const timestamp = Date.now();
//         fishes[`fish-${timestamp}`] = fish;
//         //set state
//         // this.setState( {fishes: fishes} );
//         // or:
//         this.setState({fishes});
//     }

//     updatedFish(key, updatedFish) {
//         const fishes = {...this.state.fishes};
//         fishes[key] = updatedFish;
//         this.setState({ fishes });
//     }

//     removeFish(key) {
//         const fishes = {...this.state.fishes};
//         fishes[key] = null;
//         this.setState({ fishes });
//     }

//     loadSamples() {
//         this.setState({
//             fishes: sampleFishes
//         })
//     }

//     addToOrder(key) {
//         // copy the current state of order
//         const order = {...this.state.order};
//         // update or add new number of fish to order
//         order[key] = order[key] + 1 || 1;
//         // update our state of order
//         this.setState({ order });
//     }

//     removeFromOrder(key) {
//         const order = {...this.state.order};
//         delete order[key]
//         this.setState({ order });
//     }

//     render() {
//         return (
//             <div className="catch-of-the-day">
//                 <div className="menu">
//                     <Header tagline="Fresh Seafood Market" />
//                     <ul className="list-of-fishes">
//                         {
//                             Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
//                         }
//                     </ul>
//                 </div>

//                 <Order
//                     fishes={this.state.fishes}
//                     order={this.state.order}
//                     params={this.props.params}
//                     removeFromOrder={this.removeFromOrder}
//                 />
//                 <Inventory
//                     addFish={this.addFish}
//                     loadSamples={this.loadSamples}
//                     fishes={this.state.fishes}
//                     updatedFish={this.updatedFish}
//                     removeFish={this.removeFish}
//                 />
//             </div>
//         )
//     }
// }

// export default App;
// // go to Order.js

// // ===========================================================================
// // #23video-03: add propTypes

// import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import sampleFishes from '../sample-fishes';
// import Fish from './Fish';
// import base from '../base';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.addFish = this.addFish.bind(this);
//         this.removeFish = this.removeFish.bind(this);
//         this.removeFromOrder = this.removeFromOrder.bind(this);
//         this.loadSamples = this.loadSamples.bind(this);
//         this.addToOrder = this.addToOrder.bind(this);
//         this.updatedFish = this.updatedFish.bind(this);

//         //getInitial state
//         this.state = {
//             fishes: {},
//             order: {}
//         };
//     }

//     componentWillMount() {
//         // this run right before App.js is rendered
//         this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
//         {
//             context: this,
//             state: 'fishes'
//         });
//         // check if there is any order in localStorage:
//         const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
//         if(localStorageRef) {
//             // udpate our App.js component's order state
//             this.setState({
//                 order: JSON.parse(localStorageRef)
//             })
//         }
//     }

//     componentWillUnmount(){
//         base.removeBinding(this.ref);
//     }

//     componentWillUpdate(nextProps, nextState) {
//         localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
//     }

//     addFish(fish) {
//         // update our state
//         const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it
//         // add in our new fish
//         const timestamp = Date.now();
//         fishes[`fish-${timestamp}`] = fish;
//         //set state
//         // this.setState( {fishes: fishes} );
//         // or:
//         this.setState({fishes});
//     }

//     updatedFish(key, updatedFish) {
//         const fishes = {...this.state.fishes};
//         fishes[key] = updatedFish;
//         this.setState({ fishes });
//     }

//     removeFish(key) {
//         const fishes = {...this.state.fishes};
//         fishes[key] = null;
//         this.setState({ fishes });
//     }

//     loadSamples() {
//         this.setState({
//             fishes: sampleFishes
//         })
//     }

//     addToOrder(key) {
//         // copy the current state of order
//         const order = {...this.state.order};
//         // update or add new number of fish to order
//         order[key] = order[key] + 1 || 1;
//         // update our state of order
//         this.setState({ order });
//     }

//     removeFromOrder(key) {
//         const order = {...this.state.order};
//         delete order[key]
//         this.setState({ order });
//     }

//     render() {
//         return (
//             <div className="catch-of-the-day">
//                 <div className="menu">
//                     <Header tagline="Fresh Seafood Market" />
//                     <ul className="list-of-fishes">
//                         {
//                             Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
//                         }
//                     </ul>
//                 </div>

//                 <Order
//                     fishes={this.state.fishes}
//                     order={this.state.order}
//                     params={this.props.params}
//                     removeFromOrder={this.removeFromOrder}
//                 />
//                 <Inventory
//                     addFish={this.addFish}
//                     loadSamples={this.loadSamples}
//                     fishes={this.state.fishes}
//                     updatedFish={this.updatedFish}
//                     removeFish={this.removeFish}
//                     storeId={this.props.params.storeId}
//                 />
//             </div>
//         )
//     }
// }

// App.proptypes = {
//     params: React.PropTypes.object.isRequired
// }

// export default App;
// // go to Fish.js

// ===========================================================================
// #29video-01: getting rip of bind, move state out of constructor

import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        // this.removeFish = this.removeFish.bind(this);
        this.removeFromOrder = this.removeFromOrder.bind(this);
        // this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        // this.updatedFish = this.updatedFish.bind(this);


    }
    //getInitial state
    state = {
        fishes: {},
        order: {}
    };

    componentWillMount() {
        // this run right before App.js is rendered
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
        {
            context: this,
            state: 'fishes'
        });
        // check if there is any order in localStorage:
        const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
        if(localStorageRef) {
            // udpate our App.js component's order state
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
    }

    addFish(fish) {
        // update our state
        const fishes = {...this.state.fishes}; // take the current state of fishes and spread it = make a copy of it
        // add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //set state
        // this.setState( {fishes: fishes} );
        // or:
        this.setState({fishes});
    }

    updatedFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({ fishes });
    };

    removeFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({ fishes });
    };

    loadSamples = () => {
        this.setState({
            fishes: sampleFishes
        })
    };

    addToOrder(key) {
        // copy the current state of order
        const order = {...this.state.order};
        // update or add new number of fish to order
        order[key] = order[key] + 1 || 1;
        // update our state of order
        this.setState({ order });
    }

    removeFromOrder(key) {
        const order = {...this.state.order};
        delete order[key]
        this.setState({ order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="list-of-fishes">
                        {
                            Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
                        }
                    </ul>
                </div>

                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                    params={this.props.params}
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory
                    addFish={this.addFish}
                    loadSamples={this.loadSamples}
                    fishes={this.state.fishes}
                    updatedFish={this.updatedFish}
                    removeFish={this.removeFish}
                    storeId={this.props.params.storeId}
                />
            </div>
        )
    }
}

App.proptypes = {
    params: React.PropTypes.object.isRequired
}

export default App;
// go to Inventory.js