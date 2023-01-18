import axios from "axios"
import {BASE_URL , API_KEY_PARAM , BACKDROP_BASE_URLA} from "../config"


export class TVShowApi{

   static async fetchPopulars(){
      const response =  await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)

return response.data.results;
    }
}