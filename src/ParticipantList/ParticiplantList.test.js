import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './ParticipantList';
import renderer from 'react-test-renderer';
import data from '../participants';

describe('ParticipantList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<ParticipantList participants={data} />)
      .toJSON();
      
    expect(tree).toMatchSnapshot();
  });
});