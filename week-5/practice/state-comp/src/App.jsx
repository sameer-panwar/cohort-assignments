import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todolist, setTodoList] = useState([]);
  const [todo, setTodo]= useState({name:'', date:''});
  
  const AddTodo=()=>{
    if(todo.name && todo.date){
      setTodoList([...todolist, todo]);
      setTodo({name:'', date:''});
    }
    console.log(todolist);
  }

  const updateTodo=(e)=>{
    let {name, value}=e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
    console.log(todo);
  };

  const RenderTodo=()=>{
    return(
      <ul>
        {todolist.map((item, key)=>(
          <li key={key}>{item.name}-{item.date}</li>
        ))}
      </ul>
    );
  }

  const NotifTodo=()=>{
    return(
          todolist.length === 0? 0:todolist.length>5?"5+":todolist.length
        )
    }

  return (
    <>
      <h1>Todo</h1>
      <NotifTodo/>
      <br/>
      <input
        name='name'
        type='text'
        value={todo.name}
        onChange={updateTodo}
        placeholder='Write you Daily Task'
      />
      <input 
        name='date'
        type='number'
        value={todo.date}
        onChange={updateTodo}
        placeholder="Time please"
      />
      <button onClick={AddTodo}>Add Todo</button>

      <RenderTodo/>
     </>
  ) 
}

export default App
