import axios from "axios";
import { root } from "./config";

const post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root}/${path}`, data)
            .then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            })
    });

    return promise;
}

export default post;