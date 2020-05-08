// import React from 'react';
// import ReactDOM from 'react-dom';

// //State
// // class Counter extends React.Component{
// //   constructor(props){
// //     super(props);


// //     this.state = {
// //       count : 0
// //     };
// //   }
// //   render(){
// //     return(<div>
// //       <h1>{this.state.count}</h1>
// //       <button>+1</button>
// //       <button>-1</button>
// //     </div>);
// //   }
  
// // }




// //Props
// // function Welcome(props){
// //   return <h1> Welcome ,{props.name} age of {props.age} </h1>
// // }

// //arrow functions
// // const Header = (props) => {
// //   return <h1>Welcome</h1>
// // }

// // function Header(props){
// // return <h1> Welcome {props.name}</h1>
// // };

// // function App(){
// //   return( 
// //   <div>
// //     <Header name = "Shanoon"/ >
// //     <Header name = "Majeed"/ >
// //   </div>
// // )}

// //Events
// class Counter extends React.Component{
//   constructor(props){
//     super(props);


//     this.state = {
//       count : 0
//     };
//   }

// handleAdd = ()=> {
//   this.setState ( (prevState) => {
//     return{ count : prevState.count + 1}
//   })
// }
// handleRed = ()=> {
//   this.setState ( (prevState) => {
//     return{ count : prevState.count - 1}
//   })
  
// }
// handleReset = ()=> {
//   //setState
//   this.setState ( (prevState) => {
//     return{ count :0}
//   })
// }

//   render(){
//     return(<div>
//       <h1>{this.state.count}</h1>
//       <button onclick={this.handleAdd}>+1</button>
//       <button onclick={this.handleReset}>reset</button>
//       <button onclick={this.handleRed}>-1</button>
//     </div>);
//   }
  
// }



// ReactDOM.render(<Counter/>, document.getElementById('root'));
