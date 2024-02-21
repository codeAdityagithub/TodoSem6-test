import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput';
import Todocard from './Todocard';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        const fetchTodos= async()=>{
            try{
                const res = await axios.get("http://localhost:8000/todo");
                setTodos(res.data.todos);
            }catch(err){
                console.log(err);
            }
        }
        fetchTodos();
    },[])
    const addTodo = (input)=>{
        const newarr=[...todos, {
            _id:110,
            content:input
        }];

        setTodos(newarr);
    }
  return (
    <>
      {/* top part */}
      <div className="w-full flex-1 flex items-center justify-center flex-col gap-10 p-3">
      {/* header */}
      <div className="text-4xl text-white">JUST DO IT |</div>

      {/* todo input */}
      <TodoInput addTodo={addTodo} />
  </div>

  {/* all todos = bottom part */}
  <div className="flex-1 w-full flex items-center flex-col gap-2 p-3 overflow-y-scroll">
      {todos.map((todo, ind) => {
          return <Todocard key={todo._id} title={todo.content} />;
      })}

      {todos.length === 0 ? (
          <p className="text-white">Enter todos to see them</p>
      ) : null}
  </div>
  </>
  )
}

export default Todos;
