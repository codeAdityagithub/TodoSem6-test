// const express = require("express");
import express from "express";

const app = express();

console.log("test");

app.listen(8000, () => {
    console.log("server is running on http://localhost:8000");
});
