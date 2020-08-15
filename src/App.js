import React from 'react';
import Header from './Component/Header'
import Timer from './Component/Timer'
import Action from './Component/Action'
import './App.css'

//class component
class App extends React.Component {
  constructor(props,timer){
    super(props)
    this.timer = timer
    this.state = {
      hours : 0,
      minutes : 0,
      seconds : 0,
      milliseconds: 0
    }
  }

// event handle
handleStart = () =>{
  this.timer = setInterval(()=>{
    this.setState((prevState) =>{
      return{
        milliseconds:prevState.milliseconds + 1
      }
    })


  if (this.state.milliseconds === 100){
    this.setState((prevState)=>{
      return {
        seconds : prevState.seconds + 1,
        milliseconds: 0
      }
    })
  }

  if (this.state.seconds === 60){
    this.setState((prevState)=>{
      return {
        minutes : prevState.minutes + 1,
        seconds: 0
      }
    })
  }

  if (this.state.minutes === 60){
    this.setState((prevState)=>{
      return {
        hour : prevState.hours + 1,
        minutes:0
      }
    })
  }
},10)
}

handleStop = () =>{
  clearInterval(this.timer)
}

handleReset = () =>{
  this.setState(() =>{
    return {
      hour:0, 
      minutes : 0, 
      seconds:0,
       milliseconds: 0
      }
  })
}





  render() {
    return (
      <div className="parent">
        <div className="main">
        <Header/>
        <Timer time= {this.state}/>
        <Action 
        handleReset = {this.handleReset}
        handleStart = {this.handleStart} 
        handleStop= {this.handleStop}
         />
        </div>
        
      </div>
    );
  }
}



export default App;