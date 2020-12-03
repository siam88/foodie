import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-b6f41.firebaseio.com",

})

instance.defaults.headers.common['Authorization'] = 'Auth token from instance'

export default instance; 