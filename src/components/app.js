import React, { Component } from 'react';
import TeamSelector from '../containers/team_selector';
import PlayerList from '../containers/player_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <TeamSelector />
        <PlayerList />
      </div>
    );
  }
}
