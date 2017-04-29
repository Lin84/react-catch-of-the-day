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

// // ======================================================================================
// // #21video-02: new props = removeFish(), add button and online remove fish

// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
//     constructor() {
//         super();
//         this.renderInventory = this.renderInventory.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e, key) {
//         const fish = this.props.fishes[key];
//         // take the copy of the fish and update it with new data
//         const updatedFish = {
//             ...fish,
//             // computed property:
//             [e.target.name]: e.target.value
//         }
//         this.props.updatedFish(key, updatedFish);
//     }

//     renderInventory(key) {
//         const fish = this.props.fishes[key];
//         return(
//             <div className="fish-edit" key={key}>
//                 <input type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)}/>
//                 <input type="text" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e, key)}/>
//                 <select type="text" name="status" value={fish.status} placeholder="fish status" onChange={(e) => this.handleChange(e, key)}>
//                     <option value="available">Fresh!</option>
//                     <option value="unavailable">Sold Out!</option>
//                 </select>
//                 <textarea type="text" name="desc" value={fish.desc} placeholder="fish desc" onChange={(e) => this.handleChange(e, key)}></textarea>
//                 <input type="text" name="image" value={fish.image} placeholder="fish image" onChange={(e) => this.handleChange(e, key)}/>
//                 <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
//             </div>
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Inventory</h2>
//                 {Object.keys(this.props.fishes).map(this.renderInventory)}
//                 <AddFishForm addFish={this.props.addFish}/>
//                 <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
//             </div>
//         )
//     }
// }

// export default Inventory;
// // go to App.js

// // ======================================================================================
// // #23video-05: add PropTypes

// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
//     constructor() {
//         super();
//         this.renderInventory = this.renderInventory.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e, key) {
//         const fish = this.props.fishes[key];
//         // take the copy of the fish and update it with new data
//         const updatedFish = {
//             ...fish,
//             // computed property:
//             [e.target.name]: e.target.value
//         }
//         this.props.updatedFish(key, updatedFish);
//     }

//     renderInventory(key) {
//         const fish = this.props.fishes[key];
//         return(
//             <div className="fish-edit" key={key}>
//                 <input type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)}/>
//                 <input type="text" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e, key)}/>
//                 <select type="text" name="status" value={fish.status} placeholder="fish status" onChange={(e) => this.handleChange(e, key)}>
//                     <option value="available">Fresh!</option>
//                     <option value="unavailable">Sold Out!</option>
//                 </select>
//                 <textarea type="text" name="desc" value={fish.desc} placeholder="fish desc" onChange={(e) => this.handleChange(e, key)}></textarea>
//                 <input type="text" name="image" value={fish.image} placeholder="fish image" onChange={(e) => this.handleChange(e, key)}/>
//                 <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
//             </div>
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Inventory</h2>
//                 {Object.keys(this.props.fishes).map(this.renderInventory)}
//                 <AddFishForm addFish={this.props.addFish}/>
//                 <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
//             </div>
//         )
//     }
// }

// Inventory.propTypes = {
// fishes: React.PropTypes.object.isRequired,
// updatedFish: React.PropTypes.func.isRequired,
// removeFish: React.PropTypes.func.isRequired,
// addFish: React.PropTypes.func.isRequired,
// loadSamples: React.PropTypes.func.isRequired,
// }

// export default Inventory;
// // go to Order.js

// // ======================================================================================
// // #24video-01: init, createn renderLogin()

// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
//     constructor() {
//         super();
//         this.renderInventory = this.renderInventory.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e, key) {
//         const fish = this.props.fishes[key];
//         // take the copy of the fish and update it with new data
//         const updatedFish = {
//             ...fish,
//             // computed property:
//             [e.target.name]: e.target.value
//         }
//         this.props.updatedFish(key, updatedFish);
//     }

//     renderLogin() {
//         return (
//             <nav className="login">
//                 <h2>Inventory</h2>
//                 <p>Sign in to manage your store's inventory</p>
                // <button className="github" onClick={ () => this.authenticate('github')}>Log in with github</button>
//                 <button className="facebook" onClick={ () => this.authenticate('facebook')}>Log in with Facebook</button>
//             </nav>
//         )
//     }

//     renderInventory(key) {
//         const fish = this.props.fishes[key];
//         return(
//             <div className="fish-edit" key={key}>
//                 <input type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)}/>
//                 <input type="text" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e, key)}/>
//                 <select type="text" name="status" value={fish.status} placeholder="fish status" onChange={(e) => this.handleChange(e, key)}>
//                     <option value="available">Fresh!</option>
//                     <option value="unavailable">Sold Out!</option>
//                 </select>
//                 <textarea type="text" name="desc" value={fish.desc} placeholder="fish desc" onChange={(e) => this.handleChange(e, key)}></textarea>
//                 <input type="text" name="image" value={fish.image} placeholder="fish image" onChange={(e) => this.handleChange(e, key)}/>
//                 <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
//             </div>
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Inventory</h2>
//                 {Object.keys(this.props.fishes).map(this.renderInventory)}
//                 <AddFishForm addFish={this.props.addFish}/>
//                 <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
//             </div>
//         )
//     }
// }

// Inventory.propTypes = {
// fishes: React.PropTypes.object.isRequired,
// updatedFish: React.PropTypes.func.isRequired,
// removeFish: React.PropTypes.func.isRequired,
// addFish: React.PropTypes.func.isRequired,
// loadSamples: React.PropTypes.func.isRequired,
// }

// export default Inventory;

// // ======================================================================================
// // #24video-02: check if they are logged in and init state for uid

// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
//     constructor() {
//         super();
//         this.renderInventory = this.renderInventory.bind(this);
//         this.renderLogin = this.renderLogin.bind(this);
//         this.handleChange = this.handleChange.bind(this);

//         this.state = {
//             uid: null,
//             owner: null
//         }
//     }

//     handleChange(e, key) {
//         const fish = this.props.fishes[key];
//         // take the copy of the fish and update it with new data
//         const updatedFish = {
//             ...fish,
//             // computed property:
//             [e.target.name]: e.target.value
//         }
//         this.props.updatedFish(key, updatedFish);
//     }

//     renderLogin() {
//         return (
//             <nav className="login">
//                 <h2>Inventory</h2>
//                 <p>Sign in to manage your store's inventory</p>
                // <button className="github" onClick={ () => this.authenticate('github')}>Log in with github</button>
//                 <button className="facebook" onClick={ () => this.authenticate('facebook')}>Log in with Facebook</button>
//             </nav>
//         )
//     }

//     renderInventory(key) {
//         const fish = this.props.fishes[key];
//         return(
//             <div className="fish-edit" key={key}>
//                 <input type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)}/>
//                 <input type="text" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e, key)}/>
//                 <select type="text" name="status" value={fish.status} placeholder="fish status" onChange={(e) => this.handleChange(e, key)}>
//                     <option value="available">Fresh!</option>
//                     <option value="unavailable">Sold Out!</option>
//                 </select>
//                 <textarea type="text" name="desc" value={fish.desc} placeholder="fish desc" onChange={(e) => this.handleChange(e, key)}></textarea>
//                 <input type="text" name="image" value={fish.image} placeholder="fish image" onChange={(e) => this.handleChange(e, key)}/>
//                 <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
//             </div>
//         )
//     }

//     render() {
//         // check if they are no logged in at all
//         if (!this.state.uid) {
//             return (
//                 <div>{this.renderLogin()}</div>
//             )
//         }

//         return (
//             <div>
//                 <h2>Inventory</h2>
//                 {Object.keys(this.props.fishes).map(this.renderInventory)}
//                 <AddFishForm addFish={this.props.addFish}/>
//                 <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
//             </div>
//         )
//     }
// }

// Inventory.propTypes = {
// fishes: React.PropTypes.object.isRequired,
// updatedFish: React.PropTypes.func.isRequired,
// removeFish: React.PropTypes.func.isRequired,
// addFish: React.PropTypes.func.isRequired,
// loadSamples: React.PropTypes.func.isRequired,
// }

// export default Inventory;

// // ======================================================================================
// // #24video-03: check if they are owner of the story

// import React from 'react';
// import AddFishForm from './AddFishForm';

// class Inventory extends React.Component {
//     constructor() {
//         super();
//         this.renderInventory = this.renderInventory.bind(this);
//         this.renderLogin = this.renderLogin.bind(this);
//         this.handleChange = this.handleChange.bind(this);

//         this.state = {
//             uid: null,
//             owner: null
//         }
//     }

//     handleChange(e, key) {
//         const fish = this.props.fishes[key];
//         // take the copy of the fish and update it with new data
//         const updatedFish = {
//             ...fish,
//             // computed property:
//             [e.target.name]: e.target.value
//         }
//         this.props.updatedFish(key, updatedFish);
//     }

//     renderLogin() {
//         return (
//             <nav className="login">
//                 <h2>Inventory</h2>
//                 <p>Sign in to manage your store's inventory</p>
                // <button className="github" onClick={ () => this.authenticate('github')}>Log in with github</button>
//                 <button className="facebook" onClick={ () => this.authenticate('facebook')}>Log in with Facebook</button>
//             </nav>
//         )
//     }

//     renderInventory(key) {
//         const fish = this.props.fishes[key];
//         return(
//             <div className="fish-edit" key={key}>
//                 <input type="text" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)}/>
//                 <input type="text" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e, key)}/>
//                 <select type="text" name="status" value={fish.status} placeholder="fish status" onChange={(e) => this.handleChange(e, key)}>
//                     <option value="available">Fresh!</option>
//                     <option value="unavailable">Sold Out!</option>
//                 </select>
//                 <textarea type="text" name="desc" value={fish.desc} placeholder="fish desc" onChange={(e) => this.handleChange(e, key)}></textarea>
//                 <input type="text" name="image" value={fish.image} placeholder="fish image" onChange={(e) => this.handleChange(e, key)}/>
//                 <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
//             </div>
//         )
//     }

//     render() {
//         const logout = <button>Log Out!</button>
//         // check if they are no logged in at all
//         if (!this.state.uid) {
//             return (
//                 <div>{this.renderLogin()}</div>
//             )
//         }

//         // check if they are owner of the current store
//         if (this.state.uid !== this.state.owner) {
//             return(
//                 <div>
//                     <p>Sorry you are not the owner of this store !</p>
//                     {logout}
//                 </div>
//             )
//         }
//         return (
//             <div>
//                 <h2>Inventory</h2>
//                 {logout}
//                 {Object.keys(this.props.fishes).map(this.renderInventory)}
//                 <AddFishForm addFish={this.props.addFish}/>
//                 <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
//             </div>
//         )
//     }
// }

// Inventory.propTypes = {
// fishes: React.PropTypes.object.isRequired,
// updatedFish: React.PropTypes.func.isRequired,
// removeFish: React.PropTypes.func.isRequired,
// addFish: React.PropTypes.func.isRequired,
// loadSamples: React.PropTypes.func.isRequired,
// }

// export default Inventory;


// ======================================================================================
// #24video-04: add authenticate(), import base, add authHandler, use CDM, add logout()
// go to firebase to set up the security rule

import React from 'react';
import AddFishForm from './AddFishForm';
import base from '../base';

class Inventory extends React.Component {
    constructor() {
        super();
        this.authenticate    = this.authenticate.bind(this);
        this.authHandler     = this.authHandler.bind(this);
        this.handleChange    = this.handleChange.bind(this);
        this.logout          = this.logout.bind(this);
        this.renderInventory = this.renderInventory.bind(this);
        this.renderLogin     = this.renderLogin.bind(this);

        this.state = {
            uid: null,
            owner: null
        }
    }

    // to fix problem that you need to login after every reload the page
    componentDidMount() {
        base.onAuth((user) => {
            if (user) {
                this.authHandler(null, { user });
            }
        });
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

    authenticate(provider) {
        console.log(`Trying to log in with ${provider}`);
        base.authWithOAuthPopup(provider, this.authHandler);
    }

    logout() {
        base.unauth();
        this.setState({ uid: null });
    }

    authHandler(err, authData) {
        console.log(authData);
        if (err) {
            console.error(err);
            return;
        }

        // grap the store info, go to App.js and pass the storeId
        const storeRef = base.database().ref(this.props.storeId);

        // query the firebase once for the store data
        storeRef.once('value', (snapshot) => {
            const data = snapshot.val() || {};

            // claim it as our own if there is not owner already
            if(!data.owner) {
                storeRef.set({
                    owner: authData.user.uid
                });
            }

            this.setState({
                uid: authData.user.uid,
                owner: data.owner || authData.user.uid
            });
        });
    }

    renderLogin() {
        return (
            <nav className="login">
                <h2>Inventory</h2>
                <p>Sign in to manage your store's inventory</p>
                <button className="github" onClick={ () => this.authenticate('github')}>Log in with github</button>
                <button className="facebook" onClick={ () => this.authenticate('facebook')}>Log in with Facebook</button>
            </nav>
        )
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
        const logout = <button onClick={this.logout}>Log Out!</button>
        // check if they are no logged in at all
        if (!this.state.uid) {
            return (
                <div>{this.renderLogin()}</div>
            )
        }

        // check if they are owner of the current store
        if (this.state.uid !== this.state.owner) {
            return(
                <div>
                    <p>Sorry you are not the owner of this store !</p>
                    {logout}
                </div>
            )
        }
        return (
            <div>
                <h2>Inventory</h2>
                {logout}
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        )
    }
}

Inventory.propTypes = {
    fishes: React.PropTypes.object.isRequired,
    updatedFish: React.PropTypes.func.isRequired,
    removeFish: React.PropTypes.func.isRequired,
    addFish: React.PropTypes.func.isRequired,
    loadSamples: React.PropTypes.func.isRequired,
    storeId: React.PropTypes.string.isRequired,
}

export default Inventory;
// go to video 25 - Building React for Production
