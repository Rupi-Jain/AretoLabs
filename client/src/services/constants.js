export const BASE_ADDRESS = () => 'http://localhost:5000'
export const GET_ALL_POST = (user_id) => `${BASE_ADDRESS()}/posts/${user_id}`
export const GET_FILTERED_POST = (date1, date2, user_id) => `${BASE_ADDRESS()}/posts/dates/?date1=${date1}&date2=${date2}&user_id=${user_id}`
export const CREATE_POST = () => `${BASE_ADDRESS()}/post`
export const GET_USER = (name) => `${BASE_ADDRESS()}/user/${name}`
