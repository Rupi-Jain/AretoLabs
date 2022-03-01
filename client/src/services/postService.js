import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_POST, CREATE_POST, GET_FILTERED_POST  } from "./constants";
   // get test
  export const getAllPost = (user_id) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_ALL_POST(user_id))
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

  export const createPost = (data) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .post(CREATE_POST(), data)
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

  export const getFilteredPost = (date1, date2, user_id) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_FILTERED_POST(date1, date2, user_id))
        .then(res => {
          console.log("POSTS....", res.data)
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