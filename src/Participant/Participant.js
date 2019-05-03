import React from 'react'

export default function Participant(props) {
  return (
    <div className="participant">
      <img src={props.avatar} alt={props.name + ' Avatar'}/>
      <h4>{props.name}</h4>
      <span className="in-session-indicator dot"></span>
      <p className="on-stage-indicator">on stage</p>
      <p className="boot-option">Boot</p>
    </div>
  )
}
