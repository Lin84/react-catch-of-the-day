// // let's go!
// // #3video-01-import react using new syntax from es6:
// import React from 'react';
// import { render } from 'react-dom';

// class StorePicker extends React.Component {
// 	render() {
// 		return <p>Hello</p>
// 	}
// }

// render(<StorePicker/>, document.querySelector('#main'));
// // continue in new file StorePicker.js

// ======================================================================================================
// // #3video-03 create and import StorePicker component
// import React from 'react';
// import { render } from 'react-dom';

// import StorePicker from './components/StorePicker';

// render(<StorePicker/>, document.querySelector('#main'));

// // go to StorePicker.js

// ======================================================================================================
// // #5video-01: import styles
// import React from 'react';
// import { render } from 'react-dom';
// import './css/style.css';

// import StorePicker from './components/StorePicker';

// render(<StorePicker/>, document.querySelector('#main'));
// // go to video 6, create new component: App.js

// ======================================================================================================
// // #6video-02: import App component:

// import React from 'react';
// import { render } from 'react-dom';
// import './css/style.css';
// import App from './components/App';
// import StorePicker from './components/StorePicker';

// render(<App/>, document.querySelector('#main'));

// // in console.log see that components: Header, Order, Inventory is missing, go to create the components. go to Header.js

// ======================================================================================================
// // #9 video-1: working with routing:

// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter, Match, Miss } from 'react-router';

// import './css/style.css';
// import App from './components/App';

// import StorePicker from './components/StorePicker';

// const Root = () => {
// 	return(
// 		<BrowserRouter>
// 			<div>>
// 				<Match exactly pattern="/" component={StorePicker} />
// 				<Match pattern="/store/:storeId" component={App} />
// 				<Miss component={notFound} />
// 			</div>
// 		</BrowserRouter>
// 	)
// }

// render(<Root/>, document.querySelector('#main'));

// // create the NotFound.js component

// ======================================================================================================
// #9 video-3: import NotFound component:

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));
// go to #10video - helpers and Utility functions. go to StorePicker.js































