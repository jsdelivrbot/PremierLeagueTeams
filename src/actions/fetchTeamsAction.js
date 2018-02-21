import axios from 'axios';

const ROOT_URL = 'http://api.football-data.org/v1/';
export const FETCH_TEAMS ='FETCH_TEAMS';
const API_KEY = '4cb108886c3d42d1a827133eb67425e4';


export function fetchTeams() {
  const url = `${ROOT_URL}soccerseasons/445/teams`;
  
  const request =  axios.get(url, {headers: {
       'X-Auth-Token': API_KEY}});

  return {
    type: FETCH_TEAMS,
    payload: request
  };
}
