import mongoose from "mongoose";

export default async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db connected");
     }
     catch(error){
        console.log(error);
     }
}
