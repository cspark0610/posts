import * as api from "../api/index";
import { AUTH } from "../constants/actionTypes";
//tengo que recibir como parametros lo que mando con el dispatch desde el componente
//formData y history



export const signin = (formData, history) => async(dispatch) => {
    
    try {
        //log in the user
        const { data } = await api.signIn(formData);
        dispatch({type:AUTH, data});
        history.push('/');

    } catch (error) {
        console.log(error);
    }
}


export const signup = (formData, history) => async(dispatch) => {
    //console.log(formData);
   // console.log(history);
    try {
        //log in the user
        const {data} = await api.signUp(formData);
        console.log(data);
        dispatch({type:AUTH, data})
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}