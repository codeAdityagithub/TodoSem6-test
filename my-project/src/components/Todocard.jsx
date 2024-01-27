import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todocard = (props) => {
    return (
        <div className="rounded-2xl max-w-[400px] w-full text-white bg-slate-400 hover:bg-slate-600 backdrop:blur-sm flex items-center justify-start px-2 py-1">
            <div className="flex-1">{props.title}</div>
            <div className="flex gap-2">
                <button className=" bg-green-300 text-black p-2 rounded-full hover:bg-green-500">
                    <FaCheck />
                </button>
                <button className=" bg-red-300 text-black p-2 rounded-full hover:bg-red-500">
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default Todocard;
