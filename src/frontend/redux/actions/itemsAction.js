import axios from 'axios';

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const GET_ITEMS_LIST = 'GET_ITEMS_LIST';
export const RESET_MESSAGE = 'RESET_MESSAGE';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_ERROR = 'SET_ERROR';

export const FAIL_GET_ITEMS_LIST = 'FAIL_GET_ITEMS_LIST';

export const actGetItemsList = () => dispatch => {
  axios
    .get(`http://localhost:3000/api/items`)
    .then(res => {
      dispatch({
        type: GET_ITEMS_LIST,
        payload: res.data,
      });
    })
    .catch(error => {
      if (error.message) {
        dispatch({
          type: SET_ERROR,
          payload: error.message,
        });
      } else {
        dispatch({
          type: SET_ERROR,
          payload: FAIL_GET_ITEMS_LIST,
        });
      }
    });
};

export const actAddItem = itemText => dispatch => {
  axios
    .post(`http://localhost:3000/api/item`, { item: itemText })
    .then(res => {
      dispatch({
        type: ADD_ITEM,
        payload: 'Thêm thành công!',
      });
    })
    .catch(error => {
      if (error.message) {
        dispatch({
          type: SET_ERROR,
          payload: error.message,
        });
      } else {
        dispatch({
          type: SET_ERROR,
          payload: 'Thêm thất bại!',
        });
      }
    });
};

export const actDeleteItem = id => dispatch => {
  axios
    .delete(`http://localhost:3000/api/item/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_ITEM,
        payload: 'Xóa thành công!',
      });
    })
    .catch(error => {
      if (error.message) {
        dispatch({
          type: SET_ERROR,
          payload: error.message,
        });
      } else {
        dispatch({
          type: SET_ERROR,
          payload: 'Xóa thất bại!',
        });
      }
    });
};

export const actUpdateItem = (isUpdating, updateItemText) => dispatch => {
  axios
    .put(`http://localhost:3000/api/item/${isUpdating}`, { item: updateItemText })
    .then(res => {
      dispatch({
        type: UPDATE_ITEM,
        payload: 'Sửa thành công!',
      });
    })
    .catch(error => {
      if (error.message) {
        dispatch({
          type: SET_ERROR,
          payload: error.message,
        });
      } else {
        dispatch({
          type: SET_ERROR,
          payload: 'Sửa thất bại!',
        });
      }
    });
};
