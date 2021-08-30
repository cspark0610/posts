import { combineReducers } from 'redux';
import { postsReducer } from './posts'
import { authReducer } from './auth'

//necsito combinar los reducers cuando tengo mas de uno !!
export default combineReducers({
    posts: postsReducer,
    auth: authReducer
});
