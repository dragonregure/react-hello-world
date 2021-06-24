import axios from "axios";
import { root } from "./config";

const put = (path, id, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root}/${path}/${id}`, data)
            .then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
    });
    return promise;
}

export default put;