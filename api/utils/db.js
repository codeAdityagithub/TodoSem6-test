import mongoose from "mongoose";

// Or:

export default async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}
