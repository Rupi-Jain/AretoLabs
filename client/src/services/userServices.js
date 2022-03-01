import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_USER } from "./constants";
   // get test
  export const getUser = (user_name) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_USER(user_name))
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          reject("Error in get test  axios!");
        });
      } catch (error) {
        console.error("in url service  > get short url, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  }; 