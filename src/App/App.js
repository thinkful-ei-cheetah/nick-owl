import React, { Component } from 'react';
import './App.css';
import ParticipantList from '../ParticipantList/ParticipantList';
import PARTICIPANTS from '../participants';

class App extends Component {
  state = {
    participants: [...PARTICIPANTS]
  };

  componentDidMount() {
    const sortedParticipants = 
      this.state.participants
        .sort( (a, b) => b.inSession - a.inSession )
        .sort( (a, b) => b.onStage - a.onStage );
    
    this.setState({
      participants: sortedParticipants
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Nick's OWL</h1>
        <ParticipantList participants={this.state.participants}/>
      </div>
    );
  }; 
};

export default App;
