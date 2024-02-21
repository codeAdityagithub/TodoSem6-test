import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema= new Schema({
    content:{
        type:String,
        required:true,
    }
});

const Todo=mongoose.model("Todos",todoSchema);
export default Todo;