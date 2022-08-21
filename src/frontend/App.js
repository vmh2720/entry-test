import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actGetItemsList, actAddItem, actDeleteItem, actUpdateItem } from './redux/actions/itemsAction';

function App() {
  const dispatch = useDispatch();
  const itemsList = useSelector(state => state.itemsReducer);

  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setUpdateItemText] = useState('');

  const addItem = async e => {
    e.preventDefault();
    setItemText('');
    dispatch(actAddItem(itemText));
  };

  useEffect(() => {
    dispatch(actGetItemsList());
  }, [dispatch]);

  useEffect(() => {
    if (itemsList != null && itemsList.dataValue.length > 0) {
      setListItems(itemsList.dataValue);
    }

    if (itemsList.message !== '') {
      alert(itemsList.message);
      dispatch(actGetItemsList());
    }
  }, [itemsList]);

  const showUIUpdate = async item => {
    setIsUpdating(item._id);
    setUpdateItemText(item.item);
  };

  const updateItem = async e => {
    e.preventDefault();
    try {
      dispatch(actUpdateItem(isUpdating, updateItemText));
      setUpdateItemText('');
      setIsUpdating('');
    } catch (err) {
      console.info(err);
    }
  };
  const renderUpdateForm = () => (
    <form
      className="update-form"
      onSubmit={e => {
        updateItem(e);
      }}
    >
      <input
        className="update-new-input"
        type="text"
        onChange={e => {
          setUpdateItemText(e.target.value);
        }}
        value={updateItemText}
      />
      <button className="update-new-btn" type="submit">
        Update
      </button>
    </form>
  );

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <form className="form" onSubmit={e => addItem(e)}>
          <input
            type="text"
            onChange={e => {
              setItemText(e.target.value);
            }}
            value={itemText}
          />
          <button type="submit">Add</button>
        </form>
        <div className="todo-listItems">
          {listItems.map((item, index) => (
            <div key={index} className="todo-item">
              {isUpdating === item._id ? (
                renderUpdateForm()
              ) : (
                <>
                  <p className="item-content">{item.item}</p>
                  <button
                    className="update-item"
                    onClick={() => {
                      showUIUpdate(item);
                    }}
                  >
                    Update
                  </button>
                  <button className="delete-item" onClick={() => dispatch(actDeleteItem(item._id))}>
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
