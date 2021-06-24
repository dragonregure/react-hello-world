import axios from "axios";
import { root } from './config';

const get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root}/${path}`)
            .then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            })
    });

    return promise;
}

export default get;