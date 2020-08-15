import React from 'react'

function Action(props){
    return (
        <div className="action">
          <button id="reset" onClick={props.handleReset}>Reset</button>
          <button id="start" onClick={props.handleStart}>Start</button>
          <button id="stop" onClick={props.handleStop}>Stop</button>
        </div>
      )
}

export default Action

// const Action = (props) => {
    
//   }