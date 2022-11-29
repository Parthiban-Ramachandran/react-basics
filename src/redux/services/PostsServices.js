import http from '../config';

const getAll = (params) => {
    return http.get("/posts" + params)
};

const deletePost = id => {
    return http.delete("/posts/" + id);
};

const post = (data) => {
    console.log(data);
    return http.get("/posts" , data)
};

const PostsServices = {
    getAll,
    deletePost,
    post
};

export default PostsServices;