import axios from "axios";

const LogUp = () => {
    async function logupdata(event){
        event.preventDefault();
        const username=event.target[0].value;
        const password=event.target[1].value;

        const data={
            username:username,
            password:password
        }
        const res= await axios.post("http://localhost:8000/login",data);
    }
    return (
        // <>
            <form action="post" onSubmit={logupdata} className="rounded-xl bg-gray-300 m-1 p-2 shadow-sm hover:bg-gray-400 max-w-[800px] w-auto flex flex-col justify-center text-blue-500">
                <div className="bg-slate-700 rounded-sm">
                <h1 className="text-orange-600 text-center font-semibold">Sign Up</h1>
                </div>
                <div className="m-2 p-1">
                <label htmlFor="username" className="p-2">Username</label>
                <input type="text" name="username" id="username" className="p-2 rounded-sm hover:cursor-text"/>
                </div>
                <div className="m-2 p-1">
                <label htmlFor="password" className="p-2">Password</label>
                <input type="password" name="password" id="password" className="p-2 rounded-sm hover:cursor-text"/>
                </div>
                <button type="submit" className="bg-slate-700 rounded-md hover:cursor-pointer">Register</button>
            </form>
        // </>
    )
}
export default LogUp;