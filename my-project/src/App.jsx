import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import Todocard from "./components/Todocard";
import axios from "axios";
import Login from "./components/Login";
import LogUp from "./components/LogUp";
import Todos from "./components/Todos";
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            loader: async () => {
                try {
                    const res = await axios.get("http://localhost:8000/todo", {
                        withCredentials: true,
                    });
                    return res.data.todos;
                } catch (err) {
                    console.log(err);
                    return redirect("/login");
                }
            },
            element: <Todos />,
            path: "/",
        },
        {
            element: <Login />,
            path: "/login",
        },
        {
            element: <LogUp />,
            path: "/register",
        },
    ]);
    return (
        <div className="bg-slate-800 h-screen flex flex-col items-center justify-evenly gap-3">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
