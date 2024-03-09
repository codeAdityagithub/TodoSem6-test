import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Todocard from "./Todocard";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const Todos = () => {
    const initialTodos = useLoaderData();
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = (input, id) => {
        const newarr = [
            ...todos,
            {
                _id: id,
                content: input,
            },
        ];

        setTodos(newarr);
    };
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
                    return (
                        <Todocard
                            setTodos={setTodos}
                            key={todo._id}
                            id={todo._id}
                            checked={todo.checked}
                            title={todo.content}
                        />
                    );
                })}

                {todos.length === 0 ? (
                    <p className="text-white">Enter todos to see them</p>
                ) : null}
            </div>
        </>
    );
};

export default Todos;
