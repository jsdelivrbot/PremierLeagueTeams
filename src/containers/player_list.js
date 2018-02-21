import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
  renderPlayer(playerData){

    return (
      <div className="card" key={playerData.name}>
        <div className="card-block">
          <h4 className="card-title">{playerData.name}</h4>
          <p className="card-text">Position : {playerData.position}</p>
          <p className="card-text">Date of Birth : {playerData.dateOfBirth}</p>
          <p className="card-text">Nationality : {playerData.nationality}</p>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div className="container">
        <div className="card-deck-wrapper">
          <div className="card-deck">
            {this.props.squad.map(this.renderPlayer)}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ squad }){
  return { squad };
}

export default connect(mapStateToProps)(PlayerList);
