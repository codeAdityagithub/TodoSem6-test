import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import Todocard from "./components/Todocard";
import axios from "axios";
import Login from "./components/Login";
import LogUp from "./components/LogUp";
import Todos from "./components/Todos";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  
function App() {
    
    const router=createBrowserRouter([
        {
            element:<Todos/>,
            path:"/",
        },
        {
            element:<Login/>,
            path:"/login",
        },
        {
            element:<LogUp/>,
            path:"/logup"
        }
    ])
    return (
        <div className="bg-slate-800 h-screen flex flex-col items-center justify-evenly gap-3">
           <RouterProvider router={router} />
        </div>
    );
}

export default App;
