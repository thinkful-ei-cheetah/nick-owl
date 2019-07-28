import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantOnStage from './ParticipantOnStage';
import renderer from 'react-test-renderer';

describe('ParticipantOnStage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantOnStage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<ParticipantOnStage />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});