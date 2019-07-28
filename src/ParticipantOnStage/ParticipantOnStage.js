import React from 'react';
import { faVolumeUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ParticipantOnStage.css';

export default function ParticipantOnStage(props) {
  return (
    <div className="participant-on-stage">
      <div className="participant-badge">
        {props.name}
        <hr />
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faVolumeUp} />
      </div>
      <img className="avatar-on-stage" src={props.avatar} alt="Participant Avatar"/>
    </div>
  )
}
