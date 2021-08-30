import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case FETCH_ALL:
      return action.payload; //data
    case CREATE:
      return [...posts, action.payload];
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));  
    default:
      return posts;
  }
};

//caso update

// para crear un nuevo post tengo q spredear lo anterior en el array y devolver el; action.payload
