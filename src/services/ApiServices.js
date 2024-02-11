import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

export const getRequest = async (api, data) => {
    try {
        
        const url = `${baseUrl}${api}`;

        const response = await axios.get(url, data);

        return response.data;

    } catch (error) {
        throw error;
    }
}

export const postRequest = async (api, data) => {
    try {
        
        const url = `${baseUrl}${api}`;

        const response = await axios.post(url, data);

        return response.data;

    } catch (error) {
        throw error;
    }
}