import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Todocard = ({ title, id, checked, setTodos }) => {
    const navigate = useNavigate();

    async function update() {
        if (checked) return;
        try {
            const res = await axios.put(
                "http://localhost:8000/todo",
                {
                    todoid: id,
                },
                { withCredentials: true }
            );
        } catch (error) {
            // console.log(first);
            navigate("/login");
        }

        if (res.status === 200) {
            // console.log("updated");
            setTodos((prev) =>
                prev.map((todo) => {
                    if (todo._id == id) {
                        return { ...todo, checked: true };
                    } else return todo;
                })
            );
        }
    }
    async function del() {
        try {
            const res = await axios.delete("http://localhost:8000/todo", {
                data: { todoid: id },
                withCredentials: true,
            });
        } catch (error) {
            // console.log(first);
            navigate("/login");
        }

        if (res.status === 200) {
            setTodos((prev) => prev.filter((todo) => todo._id !== id));
        }
    }
    return (
        <div className="rounded-2xl max-w-[400px] w-full text-white bg-slate-400 hover:bg-slate-600 backdrop:blur-sm flex items-center justify-start px-2 py-1">
            <div className={`flex-1 ${checked ? "underline" : ""}`}>
                {title}
            </div>
            <div className="flex gap-2">
                <button
                    className=" bg-green-300 text-black p-2 rounded-full hover:bg-green-500"
                    onClick={update}
                >
                    <FaCheck />
                </button>
                <button
                    className=" bg-red-300 text-black p-2 rounded-full hover:bg-red-500"
                    onClick={del}
                >
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default Todocard;
