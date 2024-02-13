// const express = require("express");
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./utils/db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.post("/todo", (req, res) => {
    const todo = req.body.todo;
    // add to db
    return res.json("working");
});

connect().then(() => {
    app.listen(8000, () => {
        console.log("server is running on http://localhost:8000");
    });
});
