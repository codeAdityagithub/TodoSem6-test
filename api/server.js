// const express = require("express");
import express from "express";
import cors from "cors";
import connect from "./utils/db.js";
import dotenv from "dotenv"
import Todo from "./models/Todo.js"

const app = express();

dotenv.config();
app.use(express.json());
app.use(
    cors({
    origin:"http://127.0.0.1:5173",
})
);

console.log("test");

app.get("/todo",async (req,res)=>{
    try{
        const todos=await Todo.find();
        return res.status(200).json({todos:todos}); 
    }catch(error){
        console.log(error.message);
        return res.status(500).json("cannot insert at this moment");
    }
});

app.post("/todo",async (req,res)=>{
    const todo=req.body.todo;
    // console.log(todo);
    try{
        const dbtodo= new Todo();
        dbtodo.content=todo;
        await dbtodo.save();
        return res.json("working");
    }catch(error){
        console.log(error.message);
        res.status(500).json("cannot insert at this moment");
    }
});

app.post("/login",(req,res)=>{
    const user= req.body.username;
    const pass= req.body.password;
    console.log(user,pass);
    return res.status(200).json("working");
});

connect().then(()=>{
    app.listen(8000, () => {
        console.log("server is running on http://localhost:8000");
    });
});
