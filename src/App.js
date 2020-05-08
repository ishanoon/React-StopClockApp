import React, {Component} from 'react';
import './App.css'
//class component
class App extends Component {
  constructor(props,timer){
    super(props)
    this.timer = timer
    this.state = {
      hour : 0,
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
  })
  if (this.state.milliseconds === 100){
    this.setState((prevState)=>{
      return {
        seconds : prevState.seconds + 1,
        milliseconds:0
      }
    })
  }

  if (this.state.seconds === 60){
    this.setState((prevState)=>{
      return {
        minutes : prevState.minutes + 1,
        seconds:0
      }
    })
  }

  if (this.state.minutes === 60){
    this.setState((prevState)=>{
      return {
        hour : prevState.hour + 1,
        minutes:0
      }
    },10)
  }
}

handleStop = () =>{
  clearInterval(this.timer)
}

handleReset = () =>{
  this.setState(() =>{
    return {hour:0,minutes : 0, seconds:0, milliseconds: 0}
  })
}





  render() {
    return (
      <div>
        <Header/>
        <Action handleReset = {this.handleReset} handleStart = {this.handleStart} handleStop= {this.handleStop}/>
        <Timer time= {this.time}/>
      </div>
    );
  }
}
// functional  component

const Header = () => {
  return (
    <div>
      <h1 className="heading">STOP CLOCK</h1>
    </div>
  )
}

//for buttons
const Action = (props) => {
  return (
    <div className="action">
      <buton id="reset" onClick={props.handleReset}>Reset</buton>
      <buton id="start" onClick={props.handleStart}>Start</buton>
      <buton id="stop" onClick={props.handleStop}>Stop</buton>
    </div>
  )
}
const Timer = (props) => {
  return (
    <div className="timer">
      <div className="hour">{props.time.hour}</div>
      <div className="minute">{props.time.minutes}</div>
      <div className="seconds">{props.time.seconds}</div>
      <div className="milliseconds">(props.time.milliseconds}</div>
    </div>
  )
}

export default App;