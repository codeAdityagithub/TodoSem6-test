import { useState } from "react";
import TodoInput from "./components/TodoInput";
import Todocard from "./components/Todocard";

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <div className="bg-slate-800 h-screen flex flex-col items-center justify-evenly gap-3">
            {/* top part */}
            <div className="w-full flex-1 flex items-center justify-center flex-col gap-10 p-3">
                {/* header */}
                <div className="text-4xl text-white">JUST DO IT |</div>

                {/* todo input */}
                <TodoInput />
            </div>

            {/* all todos = bottom part */}
            <div className="flex-1 w-full flex items-center flex-col gap-2 p-3 overflow-y-scroll">
                {todos.map((todo, ind) => {
                    return <Todocard key={ind} title={todo.title} />;
                })}
                {todos.length === 0 ? (
                    <p className="text-white">Enter todos to see them</p>
                ) : null}
            </div>
        </div>
    );
}

export default App;
