import axios from "axios";
import { root } from "./config";

const del = (path, id) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root}/${path}/${id}`)
            .then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            })
    });
    return promise;
}

export default del;