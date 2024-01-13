import React, { useState } from 'react';

const TodoApp = () => {
  const [Todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const createToDo = () => {
    if (title && description) {
      if (editingIndex !== null) {
        const updatedTodos = [...Todos];
        updatedTodos[editingIndex] = { title, description };
        setTodos(updatedTodos);
        setEditingIndex(null);
      } 
      else {
        setTodos([...Todos, { title, description }]);
      }
      setTitle('');
      setDescription('');
    } 
    else {
      alert("Please enter something in ToDo's input");
    }
  };

  const deleteToDo = (index) => {
    const deletedToDo = [...Todos];
    deletedToDo.splice(index, 1);
    setTodos(deletedToDo);
    setEditingIndex(null);
  };

  const editToDo = (index) => {
    setEditingIndex(index);
    setTitle(Todos[index].title);
    setDescription(Todos[index].description);

  };

  return (
    <div className='main-div'>
      <h1 style={{color:"whitesmoke",marginLeft:"500px",marginTop:"30px"}}>ToDo Web Application</h1>
      <div className='child-div'>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  <br />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
<br />
        <button onClick={createToDo}>{editingIndex !== null ? 'Update' : 'Create'}</button>
      </div>
      <div className='add-items'>
        {/* <h2>Todos:</h2> */}
        <ul>
          {Todos.map((currentdata, index) => (
            <li key={index}>
              <strong>Title:  </strong>{currentdata.title}<br />
              <strong>Description:  </strong>{currentdata.description}
              <br /><button onClick={() => editToDo(index)}>Edit</button>
              <button onClick={() => deleteToDo(index)}>Delete</button>
              <br /><br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;









