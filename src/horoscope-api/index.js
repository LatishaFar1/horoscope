import axios from 'axios';

const URL = 'https://aztro.sameerkumar.website/';


export const horoscopeRequest = async (params) => {

    const response = await axios.post(URL, null, {
        params: {
            sign: params.sign
        }
    })


  
    return response.data;

}