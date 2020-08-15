import React from 'react'

function Timer(props){
        return (
            <div className="timer">
              <div className="hour"> {props.time.hours} </div> :
              <div className="minute">{props.time.minutes}</div> :
              <div className="second">{props.time.seconds}</div>:
              <div className="millisecond">{props.time.milliseconds}</div>
            </div>
          )

}

export default Timer

// const Timer = (props) => {
    
//   }
  