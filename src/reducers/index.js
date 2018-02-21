import { combineReducers } from 'redux';
import SquadReducer from './reducer_squad';
import TeamsReducer from './reducer_teams';

const rootReducer = combineReducers({
  squad: SquadReducer,
  teams: TeamsReducer
});

export default rootReducer;
