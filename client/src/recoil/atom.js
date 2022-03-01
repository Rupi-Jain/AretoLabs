import { atom } from 'recoil' 
import moment from "moment";

const date = new Date()

export const user = atom({
  key: "user",
  default: {},
})

export const userPost = atom({
  key: "user_post",
  default: [],
})

export const dateFrom = atom({
  key: "date_from",
  default: date,
})

export const dateTo = atom({
  key: "date_to",
  default: date,
})