import React from 'react'
import Participant from '../Participant/Participant.js'
import './ParticipantList.css'

export default function ParticipantList(props) {
  const participants = props.participants.map( participant => {
    return ( 
    <li key={participant.id}>
      <Participant
        avatar={participant.avatar}
        name={participant.name}
        inSession={participant.inSession}
        onStage={participant.onStage}
        lead={participant.id === 1 ? true : false}
      />
    </li>
    )
  })

  return (
    <div className='participant-list'>
      {participants}
    </div>
  )
}
