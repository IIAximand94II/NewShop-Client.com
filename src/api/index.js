import axios from "axios";
import router from "../router";

const api = axios.create();

api.interceptors.request.use(
    function(config){
        if(localStorage.getItem('access-token')){
            config.headers = {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        }
        return config;
    },
    function(error){
        console.log('Request error.')
    });

api.interceptors.response.use(
    function(config){
        if(localStorage.getItem('access-token')){
            config.headers = {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        }
        return config;
    },
    function(error){
        console.log('Response error.');
    });

export default api;