import axios from "axios";

const TodoInput = () => {
    async function handleSubmit(event) {
        // prevent defualt behaviour of form ie. make a get request and refresh the page
        event.preventDefault();
        // console.log(event.target[0]);
        const input = event.target[0].value;
        const data = {
            todo: input,
        };
        const res = await axios.post("http://localhost:8000/todo", data);
        const resdata = await res.json();
        console.log(resdata);
    }
    return (
        <form
            method="post"
            className="max-w-[500px] w-full flex"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="todo"
                className="p-2 text-white bg-slate-900 rounded-lg flex-1"
                placeholder="Enter a todo ..."
            />

            <button
                type="submit"
                className=" bg-slate-300 text-black p-2 rounded-lg"
            >
                Add
            </button>
        </form>
    );
};

export default TodoInput;
