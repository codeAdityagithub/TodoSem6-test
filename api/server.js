// const express = require("express");
import express from "express";
import cors from "cors";
import connect from "./utils/db.js";
import dotenv from "dotenv";
import Todo from "./models/Todo.js";
import jwt from "jsonwebtoken";

import authRouter from "./routers/authRouter.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
app.use(express.json());
app.use(
    cors({
        origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
        credentials: true,
    })
);
app.use(cookieParser());

app.use("/auth", authRouter);

app.use((req, res, next) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) return res.status(403).send("You dont have token");

    jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send("Jwt is not valid");
        // console.log(decoded);
        req.user = decoded;
        return next();
    });
});

app.get("/todo", async (req, res) => {
    try {
        const todos = await Todo.find({ userid: req.user.id });
        // console.log(todos[0].checked);
        return res.status(200).json({ todos: todos });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json("cannot insert at this moment");
    }
});

app.post("/todo", async (req, res) => {
    const todo = req.body.todo;
    // console.log(todo);
    const userid = req.user.id;
    try {
        const dbtodo = new Todo();
        dbtodo.content = todo;
        dbtodo.userid = userid;
        await dbtodo.save();

        return res.json({ id: dbtodo._id });
    } catch (error) {
        console.log(error.message);
        res.status(500).json("cannot insert at this moment");
    }
});
app.put("/todo", async (req, res) => {
    const todoid = req.body.todoid;
    // console.log(todoid);
    try {
        await Todo.findByIdAndUpdate(todoid, { checked: true });
        return res.json("working");
    } catch (error) {
        console.log(error.message);
        res.status(500).json("cannot update at this moment");
    }
});
app.delete("/todo", async (req, res) => {
    const todoid = req.body.todoid;
    // console.log(todoid);
    try {
        await Todo.findByIdAndDelete(todoid);
        return res.status(200).json("working");
    } catch (error) {
        console.log(error.message);
        res.status(500).json("cannot delete at this moment");
    }
});

// app.post("/login", (req, res) => {});

connect().then(() => {
    app.listen(8000, () => {
        console.log("server is running on http://localhost:8000");
    });
});
