import axios from 'axios';

const url = 'http://localhost:5000/posts'

//crear una instancia de axios
const API = axios.create({ baseURL : url });
//tengo que mandar con esta funcion el token desde el front end al back de vuelta!!!
//lo hago con .interceptors.request.use va a ejecutarse en cada request del front al back
//middleware front
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req; //importante
})

//PARA PODER HACER PETICIONES DESDE EL FRONT HACIA EL SERVER DEBO SETEAR UN PROXY EN EL PACKAGE JSON!!!

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

