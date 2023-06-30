import {
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  MAKE_REQUEST,
} from './ActionType';

const initialstate = {
  loading: true,
  userList: [],
  userobj: {},
  errmessage: '',
};

export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmessage: action.payload,
      };
    case GET_USER_LIST:
      return {
        loading: false,
        errmessage: '',
        userlist: action.payload,
        userobj: {},
      };

    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
