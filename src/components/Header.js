// // #6video-3: create Header component:
// import React from 'react';

// class Header extends React.Component {
// 	render(){
// 		return(
// 			<p>header</p>
// 		)
// 	}
// }

// export default Header;
// // create the order js component:

// // 																											
// // #7video-2: access the props passing from App.js
// import React from 'react';

// class Header extends React.Component {
// 	render(){
// 		return(
// 			<header className="top">
// 				<h1>
// 					Catch
// 					<span className="ofThe">
// 						<span className="of">of</span>
// 						<span className="the">the</span>
// 					</span>
// 					 Day
// 				</h1>
// 				<h3 className="tagline"><span>{this.props.tagline }</span></h3>
// 			</header>
// 		)
// 	}
// }

// export default Header;
// // go to video 8 : stateless functions

// 																											
// #8video-1: change the Header component to stateless function
import React from 'react';

// you can write: function Header() {}, or : var Header = function(){}
const Header = (props) => {
		return(
		<header className="top">
			<h1>
				Catch
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>
				 Day
			</h1>
			<h3 className="tagline"><span>{props.tagline }</span></h3>
		</header>
	)
}
export default Header;
// go to #9 video = routing with js , Index.js

// ======================================================================================================





























