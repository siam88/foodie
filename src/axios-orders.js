import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-b6f41.firebaseio.com/"
})
export default instance; 