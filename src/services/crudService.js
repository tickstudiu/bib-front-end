import axios from 'axios';

export const getApi = async url => {
    try {
        const res = await axios.get(url);
        return {
            data: res.data,
            success: true
        };
    } catch (error) {
        return {
            error: error.response,
            success: false
        };
    }
};

export const postApi = async (url, data) => {
    try {
        const res = await axios.post(url, data);

        return {
            data: res.data,
            success: true
        };
    } catch (error) {
        return {
            error: error.response,
            success: false
        };
    }
};

export const deleteApi = async url => {
    try {
        const res = await axios.delete(url);
        return {
            data: res.data,
            success: true
        };
    } catch (error) {
        return {
            error: error.response,
            success: false
        };
    }
};