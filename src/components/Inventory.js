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
// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h2>Inventory</h2>
// 				<AddFishForm addFish={this.props.addFish}/>
// 				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
// 			</div>
// 		)
// 	}
// }

// export default Inventory;

// continue in video #15: displaying data with JSX, go to App.js, and create the new Fish component

// ======================================================================================
// #20video-02: map all fishes, and create renderInventory method
// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
// 	constructor() {
// 		super();
// 		this.renderInventory = this.renderInventory.bind(this);
// 	}

// 	renderInventory(key) {
// 		const fish = this.props.fishes[key];
// 		return(
// 			<div className="fish-edit" key={key}>
// 				<input type="text" name="name" value={fish.name} placeholder="fish name"/>
// 				<input type="text" name="price" value={fish.price} placeholder="fish price"/>
// 				<select type="text" name="status" value={fish.status} placeholder="fish status">
// 					<option value="available">Fresh!</option>
// 					<option value="unavailable">Sold Out!</option>
// 				</select>
// 				<textarea type="text" name="desc" value={fish.desc} placeholder="fish desc"></textarea>
// 				<input type="text" name="image" value={fish.image} placeholder="fish image"/>
// 			</div>
// 		)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h2>Inventory</h2>
// 				{Object.keys(this.props.fishes).map(this.renderInventory)}
// 				<AddFishForm addFish={this.props.addFish}/>
// 				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
// 			</div>
// 		)
// 	}
// }

// export default Inventory;

// you will see the error because we used the value, so we can not update the state of the field, in console log you can see the warning msg.

// // ======================================================================================
// // #20video-03: create the handleChange method to dynamically update the Inventory, using computed property:

// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
// 	constructor() {
// 		super();
// 		this.renderInventory = this.renderInventory.bind(this);
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(e, key) {
// 		const fish = this.props.fishes[key];
// 		// take the copy of the fish and update it with new data
// 		const updatedFish = {
// 			...fish,
// 			// computed property:
// 			[e.target.name]: e.target.value
// 		}
// 		console.log(updatedFish);
// 	}

// 	renderInventory(key) {
// 		const fish = this.props.fishes[key];
// 		return(
// 			<div className="fish-edit" key={key}>
// 				<input type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)}/>
// 				<input type="text" name="price" value={fish.price} placeholder="fish price"/>
// 				<select type="text" name="status" value={fish.status} placeholder="fish status">
// 					<option value="available">Fresh!</option>
// 					<option value="unavailable">Sold Out!</option>
// 				</select>
// 				<textarea type="text" name="desc" value={fish.desc} placeholder="fish desc"></textarea>
// 				<input type="text" name="image" value={fish.image} placeholder="fish image"/>
// 			</div>
// 		)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h2>Inventory</h2>
// 				{Object.keys(this.props.fishes).map(this.renderInventory)}
// 				<AddFishForm addFish={this.props.addFish}/>
// 				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
// 			</div>
// 		)
// 	}
// }

// export default Inventory;
// // go to App.js component to create new method: updated Fish

// ======================================================================================
// #20video-05: applying the updatedFish method to all input

// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
// 	constructor() {
// 		super();
// 		this.renderInventory = this.renderInventory.bind(this);
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(e, key) {
// 		const fish = this.props.fishes[key];
// 		// take the copy of the fish and update it with new data
// 		const updatedFish = {
// 			...fish,
// 			// computed property:
// 			[e.target.name]: e.target.value
// 		}
// 		this.props.updatedFish(key, updatedFish);
// 	}

// 	renderInventory(key) {
// 		const fish = this.props.fishes[key];
// 		return(
// 			<div className="fish-edit" key={key}>
// 				<input type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)}/>
// 				<input type="text" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e, key)}/>
// 				<select type="text" name="status" value={fish.status} placeholder="fish status" onChange={(e) => this.handleChange(e, key)}>
// 					<option value="available">Fresh!</option>
// 					<option value="unavailable">Sold Out!</option>
// 				</select>
// 				<textarea type="text" name="desc" value={fish.desc} placeholder="fish desc" onChange={(e) => this.handleChange(e, key)}></textarea>
// 				<input type="text" name="image" value={fish.image} placeholder="fish image" onChange={(e) => this.handleChange(e, key)}/>
// 			</div>
// 		)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h2>Inventory</h2>
// 				{Object.keys(this.props.fishes).map(this.renderInventory)}
// 				<AddFishForm addFish={this.props.addFish}/>
// 				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
// 			</div>
// 		)
// 	}
// }

// export default Inventory;
// go to video 21 - remove item from state, go to App.js

// ======================================================================================
// #21video-02: new props = removeFish(), add button and online remove fish

import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const fish = this.props.fishes[key];
        // take the copy of the fish and update it with new data
        const updatedFish = {
            ...fish,
            // computed property:
            [e.target.name]: e.target.value
        }
        this.props.updatedFish(key, updatedFish);
    }

    renderInventory(key) {
        const fish = this.props.fishes[key];
        return(
            <div className="fish-edit" key={key}>
                <input type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)}/>
                <input type="text" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e, key)}/>
                <select type="text" name="status" value={fish.status} placeholder="fish status" onChange={(e) => this.handleChange(e, key)}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" name="desc" value={fish.desc} placeholder="fish desc" onChange={(e) => this.handleChange(e, key)}></textarea>
                <input type="text" name="image" value={fish.image} placeholder="fish image" onChange={(e) => this.handleChange(e, key)}/>
                <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;
// go to App.js