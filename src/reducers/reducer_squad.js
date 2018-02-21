import { FETCH_SQUAD } from '../actions/fetchSquadAction';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SQUAD :
     return  action.payload.data.players;
  }

  return state;
}
