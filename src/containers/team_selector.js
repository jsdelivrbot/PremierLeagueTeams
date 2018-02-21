import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeams } from '../actions/fetchTeamsAction';
import { fetchSquad } from '../actions/fetchSquadAction';

class TeamSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', teams: ''};
    this.onTeamSelect = this.onTeamSelect.bind(this);
    this.showSquad = this.showSquad.bind(this);
    this.props.actions.fetchTeams();
  }

  onTeamSelect(event) {
    this.setState({value: event.target.value});
  }

  showSquad(event) {
    event.preventDefault();
    this.props.actions.fetchSquad(this.state.value);
  }

  renderOptions(option){
    return (
      <option key={option.name} value={option._links.players.href}> {option.name}</option>
    )
  }

  render() {
    return (
      <form onSubmit={this.showSquad} className="input-group">
        <select className="form-control" value={this.state.value} onChange={this.onTeamSelect}>
            <option value=""> Select a Team! </option>
            {this.props.teams.map(this.renderOptions)}
        </select>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Show Squad </button>
        </span>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return { teams: state.teams };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchTeams: bindActionCreators(fetchTeams, dispatch),
      fetchSquad: bindActionCreators(fetchSquad, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelector);
