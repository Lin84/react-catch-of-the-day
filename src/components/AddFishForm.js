// // #13video-02: create the AddFishForm.js
// import React from 'react';

// class AddFishForm extends React.Component {
// 	render() {
// 		return(
// 			<form className="fish-edit" action="">
// 				<input type="text" placeholder="Fish Name"/>
// 				<input type="text" placeholder="Fish Price"/>
// 				<select>
// 					<option value="available">Fresh!</option>
// 					<option value="unavailable">Sold Out!</option>
// 				</select>
// 				<textarea placeholder="Fish Desc"></textarea>
// 				<input type="text" placeholder="Fish Image"/>
// 				<button type="submit">+ Add Item</button>
// 			</form>
// 		)
// 	}
// }

// export default AddFishForm;

// // ===========================================================================
// // #13video-03: new method createFish(), and gettin the value from inputs
// import React from 'react';

// class AddFishForm extends React.Component {
// 	constructor() {
// 		super();
// 		this.createFish = this.createFish.bind(this);
// 	}

// 	createFish(event) {
// 		event.preventDefault();
// 		console.log('create new fish');
// 		const fish = {
// 			name: this.name.value,
// 			price: this.price.value,
// 			status: this.status.value,
// 			desc: this.desc.value,
// 			image: this.image.value,
// 		}
// 		console.log(fish);
// 	}

// 	render() {
// 		return(
// 			<form className="fish-edit" onSubmit={(e) => {this.createFish(e)}}>
// 				<input ref={(input) => {this.name = input}} type="text" placeholder="Fish Name"/>
// 				<input ref={(input) => {this.price = input}} type="text" placeholder="Fish Price"/>
// 				<select ref={(input) => {this.status = input}}>
// 					<option value="available">Fresh!</option>
// 					<option value="unavailable">Sold Out!</option>
// 				</select>
// 				<textarea ref={(input) => {this.desc = input}} placeholder="Fish Desc"></textarea>
// 				<input ref={(input) => {this.image = input}} type="text" placeholder="Fish Image"/>
// 				<button type="submit">+ Add Item</button>
// 			</form>
// 		)
// 	}
// }

// export default AddFishForm;
//// go to App.js to initial the state

// // ===========================================================================
// // #13video-09: using the addFish methot got from App.js component, add clear the form after submit the new form
// import React from 'react';

// class AddFishForm extends React.Component {
// 	constructor() {
// 		super();
// 		this.createFish = this.createFish.bind(this);
// 	}

// 	createFish(event) {
// 		event.preventDefault();
// 		console.log('create new fish');
// 		const fish = {
// 			name: this.name.value,
// 			price: this.price.value,
// 			status: this.status.value,
// 			desc: this.desc.value,
// 			image: this.image.value,
// 		}
// 		this.props.addFish(fish);
// 		this.fishForm.reset();
// 	}

// 	render() {
// 		return(
// 			<form ref={(input) => {this.fishForm = input}} className="fish-edit" onSubmit={(e) => {this.createFish(e)}}>
// 				<input ref={(input) => {this.name = input}} type="text" placeholder="Fish Name"/>
// 				<input ref={(input) => {this.price = input}} type="text" placeholder="Fish Price"/>
// 				<select ref={(input) => {this.status = input}}>
// 					<option value="available">Fresh!</option>
// 					<option value="unavailable">Sold Out!</option>
// 				</select>
// 				<textarea ref={(input) => {this.desc = input}} placeholder="Fish Desc"></textarea>
// 				<input ref={(input) => {this.image = input}} type="text" placeholder="Fish Image"/>
// 				<button type="submit">+ Add Item</button>
// 			</form>
// 		)
// 	}
// }

// export default AddFishForm;
// // continue in video #14 = loading the data into state on click, go ti Inventory Component

// ===========================================================================
// #23video-02: add propTypes
import React, { PropTypes } from 'react';

class AddFishForm extends React.Component {
    constructor() {
        super();
        this.createFish = this.createFish.bind(this);
    }

    createFish(event) {
        event.preventDefault();
        console.log('create new fish');
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value,
        }
        this.props.addFish(fish);
        this.fishForm.reset();
    }

    render() {
        return(
            <form ref={(input) => {this.fishForm = input}} className="fish-edit" onSubmit={(e) => {this.createFish(e)}}>
                <input ref={(input) => {this.name = input}} type="text" placeholder="Fish Name"/>
                <input ref={(input) => {this.price = input}} type="text" placeholder="Fish Price"/>
                <select ref={(input) => {this.status = input}}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea ref={(input) => {this.desc = input}} placeholder="Fish Desc"></textarea>
                <input ref={(input) => {this.image = input}} type="text" placeholder="Fish Image"/>
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
}

AddFishForm.propTypes = {
    addFish: PropTypes.func.isRequired,
}

export default AddFishForm;
// go to App.js