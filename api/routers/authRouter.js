import express from "express";
import bcrypt from "bcryptjs";
import Users from "../models/Users.js";

import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;
    try {
        const dbuser = await Users.findOne({ username: user });
        if (!dbuser) return res.status(403).json("Register first");

        const user_password = dbuser.password; // hashed pass

        const match = await bcrypt.compare(pass, user_password);

        if (!match) return res.status(401).json("Wrong credentials");

        // gen a jwt token and set cookie
        const payload = {
            id: dbuser._id,
            username: dbuser.username,
        };
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "10 secs",
        });

        res.cookie("accessToken", accessToken, {
            sameSite: "none",
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 10,
        });
        return res.status(200).json(payload);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json("Something went wrong");
    }
});
router.post("/register", async (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;

    // hashing the password
    const hashedPass = await bcrypt.hash(pass, 10);
    const newUser = new Users({ username: user, password: hashedPass });
    await newUser.save();

    return res.status(200).json("working");
});

export default router;
