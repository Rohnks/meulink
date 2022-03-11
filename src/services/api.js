
import axios from 'axios';

export const Key = "0dd805d9cac90efd076bca0965af085b70ea40d1";


const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${Key}`
    }
})

export default api;









