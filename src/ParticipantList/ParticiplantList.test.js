import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './ParticipantList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ParticipantList />, div);
  ReactDOM.unmountComponentAtNode(div);
});