import React from 'react'
import './Participant.css'

export default function Participant(props) {
  let status = '';
  if(props.inSession) {
    if(props.onStage) {
      status = 'on stage'
    } else {
      status = 'in session'
    }
  } else {
    status = 'not in session'
  }

  return (
    <div className="participant">
      <img className="avatar" src={props.avatar} alt={props.name + ' Avatar'}/>
      <h3 className="name">{props.name}</h3>
        <span className={"indicator dot " + (props.inSession ? "in" : "not-in") + "-session"}></span>
        <p className={"indicator status-text"}>
          {status}
        </p>
        <p className={"indicator boot-option" + (props.lead ? " hidden" : "")}>&#183; Boot</p>
    </div>
  )
}
