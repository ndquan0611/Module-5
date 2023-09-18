import * as httpRequest from "../utils/httpRequest";

export const get = async () => {
    try {
        const res = await httpRequest.get("library");
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const post = async (value) => {
    try {
        const res = await httpRequest.post("library", value);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const detail = async (id) => {
    try {
        const res = await httpRequest.detail(`library/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const remove = async (id) => {
    try {
        const res = await httpRequest.remove(`library/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
