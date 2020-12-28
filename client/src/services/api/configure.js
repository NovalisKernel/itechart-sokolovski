import axios from 'axios';
// axios.defaults.baseURL = apiConfig.getBaseUrl();
// axios.defaults.timeout = apiConfig.timeout;


const setAuthTokenHeader = token =>{

    if(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common.Authorization;
    }
}

export default setAuthTokenHeader;