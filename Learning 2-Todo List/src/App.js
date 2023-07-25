import React , {useState} from 'react';
import './App.css';


const TodoItem = ({todo,index, handleEdit , handleDelete}) =>{
  const [isEditing, setIsEditing] = useState(false);
  const [text , setText] = useState(todo);

   
    const handleSaveClick = () =>{
      handleEdit(index , text);
      setIsEditing(false);
    };

    return (
      <div className='todo-item'>
        {isEditing ? (
          <>
          <input type='text' value = {text} onChange = {(e)=>setText(e.target.value)} />
          <button onClick = {handleSaveClick}>Save</button>
          </>
        ):(
          <>
          <span>{todo}</span>
          <button onClick = {()=>setIsEditing(true)}>Edit</button>
          <button onClick={()=>handleDelete(index)}>Delete</button>
          </>
        )}
      </div>
    )
}



function App() {

  const [todos , setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () =>{
    if(newTodo.trim() !== ''){
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (index, updateText) =>{
    const updatedTodos = [...todos];
    updatedTodos[index] = updateText;
    setTodos(updatedTodos);
  }

  const handleDeleteTodo = (index) =>{
    const updatedTodos = todos.filter((_ , i)=> i!==index);
    setTodos(updatedTodos);
  }

  return (
    <div className='App'>
      <h1>To-Do List</h1>

      <div className='add-todo'>
        <input
        type="text"
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
        placeholder='Enter the New Task....'
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className='todo-list'>
        {todos.map((todo, index)=>(
          <TodoItem 
            key = {index}
            todo = {todo}
            index = {index}
            handleEdit = {handleEditTodo}
            handleDelete = {handleDeleteTodo}

          />
        ))}
      </div>
    </div>
  );
}

export default App;
