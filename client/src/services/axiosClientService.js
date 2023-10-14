import axios from 'axios';

/**
 * Axios requests to the local server
 *  
 */

//TODO - create API with mongoDB and use that instead of local server?

export const getAllPacks = () => {
    return axios.get('http://localhost:5000/api/packs')
}



export const getPackById = (id) => {
    return axios.get(`http://localhost:5000/api/packs/${id}`)
}

