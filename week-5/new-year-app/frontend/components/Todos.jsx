import { useState } from "react"

export function Todos(){
    const [todo, setTodo]=useState([]);
    
    return(
        <>
        <button
            onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(async (res)=>{
                    const todos=await res.json();
                    setTodo(todos);
                })
                .catch((err) =>alert("Error fetching todos: ", err));
            }}
        >List Todos</button>
        {todo.map((item)=>{
            return <div key={item._id}>
                
                <h3>{item.title}</h3>
                <div>{item.description}</div>
                <button>{item.completed==true? "Completed": "mark as complete"}</button>
            </div>
        })}
        </>
    )
}