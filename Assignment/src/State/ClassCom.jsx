
// import React, { Component } from 'react'

// export default class ClassState extends Component {
//     constructor()
//     {
//         super()
//         this.state={
//             count: 10,
//         };
//         // this.x = 0;
//     }
//     inc(){
//         // this.x--; 
//         this.setState({ count: this.state.count + 1});
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1> 
//         <h1>{this.x}</h1>
//       <button onClick={() => this.inc()} color="danger">
//         Increment
//       </button>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor()
    {
        super()
        this.state={
            count : 10,
        };
        this.x = 0;
    }
        Dec(){
            this.x--;
            this.setState({count: this.state.count - 1});
            
    }
  render() {
    return (
      <div>
       <h1>{this.x}</h1>
       {/* <h1>{this.state.count}</h1> */}
       <button onClick={() => this.Dec()} color="danger">
        Decrement
       </button>
        </div>
    )
  }
}
