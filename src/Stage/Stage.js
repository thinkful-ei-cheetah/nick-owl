import React from 'react'
import ParticipantOnStage from '../ParticipantOnStage/ParticipantOnStage';
import './Stage.css';

export default function Stage(props) {
  const participantsOnStage = props.participants
    ? props.participants.filter( p => p.onStage)
      .map(participant => {
        return (
          <ParticipantOnStage
            key={participant.id}
            name={participant.name}
            avatar={participant.avatar}
          />
        )
      })
    : null;

  return (
    <section className="stage">
      {participantsOnStage}
    </section>
  )
}
