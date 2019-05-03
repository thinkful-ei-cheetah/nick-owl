import React from 'react'
import './Participant.css'

export default function Participant(props) {
  return (
    <div className="participant">
      <img className="avatar" src={props.avatar} alt={props.name + ' Avatar'}/>
      <h3 className="name">{props.name}</h3>
        <span className={"indicator dot " + (props.inSession ? "in" : "not-in") + "-session"}></span>
        <p className="indicator on-stage">on stage</p>
        <p className="indicator boot-option">&#183; Boot</p>
    </div>
  )
}
