import axios from 'axios';

const useAxios = () => {

    const get = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            console.log('Failed to fetch data', err);
        }
    }

    const post = async (url, data) => {
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (err) {
            console.log('Failed to create data', err);
        }
    }

    const patch = async (url, data) => {
        try {
            const response = await axios.patch(url, data);
            return response.data;
        } catch (err) {
            console.log('Failed to update data', err);
        }
    }

    const remove = async (url, data) => {
        try {
            const response = await axios.delete(url, data);
            return response.data;
        } catch (err) {
            console.log('Failed to delete data', err);
        }
    }

    return { get, post, patch, remove }

}

export default useAxios;