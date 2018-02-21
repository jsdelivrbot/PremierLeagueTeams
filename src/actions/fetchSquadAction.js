import axios from 'axios';

const API_KEY = '4cb108886c3d42d1a827133eb67425e4';

const ROOT_URL = 'http://api.football-data.org/v1/';

export const FETCH_SQUAD ='FETCH_SQUAD';
export function fetchSquad(api) {
  const url = api;
  const request =  axios.get(url, {headers: {
       'X-Auth-Token': API_KEY}});

  return {
    type: FETCH_SQUAD,
    payload: request
  };
}
