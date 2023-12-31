import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:3001/",
});

export const get = async (path) => {
    const res = await request.get(path);
    return res.data;
};

export const post = async (path, value) => {
    const res = await request.post(path, value);
    return res.data;
};

export const detail = async (path, id) => {
    const res = await request.get(path, id);
    return res.data;
};

export const remove = async (path, id) => {
    const res = await request.delete(path, id);
    return res.data;
};

export default request;
