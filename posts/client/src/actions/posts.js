/// aca debo crear la action
//debo importar las peticiones axios de la carpeta api xq vana formar parte de las acciones
import * as api from "../api/index";
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
//action Creators
//son funciones que retornar OTRAS ACCIONES
// una action es un objeto que tiene un type y un payload
//el type coincide con el switch case del Reducer

//estas acciones por naturaleza van a ser asincronas dado que hay un axios al sevidor
//cuando la accion es asincrona DEBO HACER EL DISPATCH DE LA ACTION. en vez de retornar la action
//el payload en un axios es el res.data

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); //data representa el post que proviene del server por el axios
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};



export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};



export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);

      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};