import { GET_ITEMS_LIST, ADD_ITEM, SET_ERROR, DELETE_ITEM, UPDATE_ITEM } from '../actions/itemsAction';

const initialState = {
  dataValue: [],
  message: '',
};

const itemsReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case GET_ITEMS_LIST:
      return {
        ...state,
        dataValue: payload,
        message: '',
      };
    case ADD_ITEM:
      return {
        ...state,
        message: payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        message: payload,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        message: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        message: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default itemsReducer;
