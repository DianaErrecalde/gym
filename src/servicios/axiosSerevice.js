import axios from 'axios';

const axiosHost = axios.create({
    baseURL: "http://localhost:8080"
});

export const getData = async (url, data) => {
    const response = await axiosHost.get(url, data);
    return response.data;
};

export const postData = async (url, data) => {
    const response = await axiosHost.post(url, data);
    return response.data;
};

export const putData = async (url, data) => {
    const response = await axiosHost.put(url, data);
    return response.data;
};

export const deleteData = async (url, data) => {
    const response = await axiosHost.delete(url, data);
    return response.data;
};
