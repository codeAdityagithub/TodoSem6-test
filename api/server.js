// const express = require("express");
import express from "express";

const app = express();

app.listen(8000, () => {
    console.log("server is running on http://localhost:8000");
});
