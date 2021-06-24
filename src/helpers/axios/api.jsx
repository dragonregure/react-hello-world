import del from "./delete";
import get from "./get";
import post from "./post";
import put from "./put";

const getPost = () => get('posts?_sort=id&_order=desc');
const postPost = (data) => post('posts', data);
const putPost = (id, data) => put('posts', id, data);
const delPost = (id) => del('posts', id);

const API = {
    getPost,
    postPost,
    putPost,
    delPost
}

export default API;