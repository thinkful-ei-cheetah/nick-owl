import React from 'react'
import PARTICIPANTS from '../participants.js'
import Participant from '../Participant/Participant.js'
import './ParticipantList.css'

export default function ParticipantList() {
  const participants = PARTICIPANTS.map( participant => {
    return ( 
    <li key={participant.id}>
      <Participant
        avatar={participant.avatar}
        name={participant.name}
        inSession={participant.inSession}
        onStage={participant.onStage}
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
