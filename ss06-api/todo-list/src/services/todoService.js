import * as httpRequest from "../utils/httpRequest";

export const get = async () => {
    try {
        const res = await httpRequest.get("todos");
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const post = async (value) => {
    try {
        const res = await httpRequest.post("todos", value);
        return res;
    } catch (error) {
        console.log(error);
    }
};
