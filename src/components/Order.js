// // #6video-4: create Order js
// import React from 'react';

// export default class Order extends React.Component {
//  render() {
//      return (
//          <p>Order</p>
//      )
//  }
// }

// // create the new component Inventory.js:

// ====================================================================================
// #17video-2: add new div order-wrap:

// import React from 'react';

// export default class Order extends React.Component {
//  render() {
//      return (
//          <div className="order-wrap">
//              <h2>Your Order</h2>
//          </div>
//      )
//  }
// }

// ====================================================================================

// #17video-3: Object.keys to get the array of order to create the orderId
// import React from 'react';

// export default class Order extends React.Component {
//  render() {
//      const orderIds = Object.keys(this.props.order);
//      return (
//          <div className="order-wrap">
//              <h2>Your Order</h2>
//              <p>{orderIds}</p>
//          </div>
//      )
//  }
// }

// ====================================================================================

// #17video-4: create the total const, using reduce(), import formatPrice, styles format
// import React from 'react';
// import { formatPrice } from '../helpers'

// export default class Order extends React.Component {
//  render() {
//      const orderIds = Object.keys(this.props.order);
//      const total = orderIds.reduce((prevTotal, key) => {
//          const fish = this.props.fishes[key];
//          const count = this.props.order[key];
//          const isAvailable = fish && fish.status ===  'available';

//          if(isAvailable) {
//              return prevTotal + (count * fish.price || 0);
//          }
//          return prevTotal;
//      }, 0)
//      return (
//          <div className="order-wrap">
//              <h2>Your Order</h2>
//              <ul className="order">
//                  <li className="total">
//                      <strong>Total:</strong>
//                      { formatPrice(total) }
//                  </li>
//              </ul>
//          </div>
//      )
//  }
// }

// ====================================================================================
// #17video-5: create renderOrder function
// import React from 'react';
// import { formatPrice } from '../helpers'

// export default class Order extends React.Component {
//     constructor() {
//         super();
//         this.renderOrder = this.renderOrder.bind(this);
//     }

//     renderOrder(key) {
//         const fish = this.props.fishes[key];
//         const count = this.props.order[key];

//         if(!fish || fish.status === 'unavailable') {
//             return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available</li>
//         }

//         return(
//             <li key={key}>
//                 <span>{count}lbs {fish.name}</span>
//                 <span className="price">{formatPrice(count * fish.price)}</span>
//             </li>
//         )
//     }

//     render() {
//         const orderIds = Object.keys(this.props.order);
//         const total = orderIds.reduce((prevTotal, key) => {
//             const fish = this.props.fishes[key];
//             const count = this.props.order[key];
//             const isAvailable = fish && fish.status ===  'available';

//             if(isAvailable) {
//                 return prevTotal + (count * fish.price || 0);
//             }
//             return prevTotal;
//         }, 0)
//         return (
//             <div className="order-wrap">
//                 <h2>Your Order</h2>
//                 <ul className="order">
//                     {orderIds.map(this.renderOrder)}
//                     <li className="total">
//                         <strong>Total:</strong>
//                         { formatPrice(total) }
//                     </li>
//                 </ul>
//             </div>
//         )
//     }
// }
// continue with video #18,go to App.js


// // ====================================================================================
// // #21video-4: add button to remove from order
// import React from 'react';
// import { formatPrice } from '../helpers'

// export default class Order extends React.Component {
//     constructor() {
//         super();
//         this.renderOrder = this.renderOrder.bind(this);
//     }

//     renderOrder(key) {
//         const fish = this.props.fishes[key];
//         const count = this.props.order[key];
//         const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>;

//         if(!fish || fish.status === 'unavailable') {
//             return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available {removeButton}</li>
//         }

//         return(
//             <li key={key}>
//                 <span>{count}lbs {fish.name} {removeButton}</span>
//                 <span className="price">{formatPrice(count * fish.price)}</span>
//             </li>
//         )
//     }

//     render() {
//         const orderIds = Object.keys(this.props.order);
//         const total = orderIds.reduce((prevTotal, key) => {
//             const fish = this.props.fishes[key];
//             const count = this.props.order[key];
//             const isAvailable = fish && fish.status ===  'available';

//             if(isAvailable) {
//                 return prevTotal + (count * fish.price || 0);
//             }
//             return prevTotal;
//         }, 0)
//         return (
//             <div className="order-wrap">
//                 <h2>Your Order</h2>
//                 <ul className="order">
//                     {orderIds.map(this.renderOrder)}
//                     <li className="total">
//                         <strong>Total:</strong>
//                         { formatPrice(total) }
//                     </li>
//                 </ul>
//             </div>
//         )
//     }
// }
// continue with video #22 animation react component


// ====================================================================================
// #22video-1: using CSStransitionGroup - 
// import React from 'react';
// import { formatPrice } from '../helpers'
// import CSStransitionGroup from 'react-addons-css-transition-group';

// export default class Order extends React.Component {
//     constructor() {
//         super();
//         this.renderOrder = this.renderOrder.bind(this);
//     }

//     renderOrder(key) {
//         const fish = this.props.fishes[key];
//         const count = this.props.order[key];
//         const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>;

//         if(!fish || fish.status === 'unavailable') {
//             return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available {removeButton}</li>
//         }

//         return(
//             <li key={key}>
//                 <span>{count}lbs {fish.name} {removeButton}</span>
//                 <span className="price">{formatPrice(count * fish.price)}</span>
//             </li>
//         )
//     }

//     render() {
//         const orderIds = Object.keys(this.props.order);
//         const total = orderIds.reduce((prevTotal, key) => {
//             const fish = this.props.fishes[key];
//             const count = this.props.order[key];
//             const isAvailable = fish && fish.status ===  'available';

//             if(isAvailable) {
//                 return prevTotal + (count * fish.price || 0);
//             }
//             return prevTotal;
//         }, 0)
//         return (
//             <div className="order-wrap">
//                 <h2>Your Order</h2>
//                 <CSStransitionGroup
//                     className="order"
//                     component="ul"
//                     transitionName="order"
//                     transitionEnterTimeout={500}
//                     transitionLeaveTimeout={500}
//                 >
//                     {orderIds.map(this.renderOrder)}
//                     <li className="total">
//                         <strong>Total:</strong>
//                         { formatPrice(total) }
//                     </li>
//                 </CSStransitionGroup>
//             </div>
//         )
//     }
// }

// go to animation.styl

// ====================================================================================
// #22video-3: animate count number
import React from 'react';
import { formatPrice } from '../helpers'
import CSStransitionGroup from 'react-addons-css-transition-group';

export default class Order extends React.Component {
    constructor() {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>;

        if(!fish || fish.status === 'unavailable') {
            return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available {removeButton}</li>
        }

        return(
            <li key={key}>
                <span>
                    <CSStransitionGroup
                        className="count"
                        component="span"
                        transitionEnterTimeout={250}
                        transitionLeaveTimeout={250}
                        transitionName="count"
                    >
                        <span key={count}>{count}</span>
                    </CSStransitionGroup>
                    lbs {fish.name} {removeButton}
                </span>
                <span className="price">{formatPrice(count * fish.price)}</span>
            </li>
        )
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status ===  'available';

            if(isAvailable) {
                return prevTotal + (count * fish.price || 0);
            }
            return prevTotal;
        }, 0)
        return (
            <div className="order-wrap">
                <h2>Your Order</h2>
                <CSStransitionGroup
                    className="order"
                    component="ul"
                    transitionName="order"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        { formatPrice(total) }
                    </li>
                </CSStransitionGroup>
            </div>
        )
    }
}

// go to animation.styl