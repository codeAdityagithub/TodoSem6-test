import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    async function logindata(event) {
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        if (!username) return;

        const data = {
            username: username,
            password: password,
        };
        const res = await axios.post("http://localhost:8000/auth/login", data, {
            withCredentials: true,
        });
        if (res.status === 200) {
            navigate("/");
        }
        //  fetch-> credentials:"include"
    }
    return (
        // <>
        <form
            action="post"
            onSubmit={logindata}
            className="rounded-xl bg-gray-300 m-1 p-2 shadow-sm  max-w-[800px] w-auto flex flex-col justify-center"
        >
            <div className="bg-slate-700 rounded-sm">
                <h1 className="text-orange-600 text-center font-semibold">
                    Sign In
                </h1>
            </div>
            <div className="m-2 p-1">
                <label htmlFor="username" className="p-2">
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="p-2 rounded-sm hover:cursor-text"
                />
            </div>
            <div className="m-2 p-1">
                <label htmlFor="password" className="p-2">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="p-2 rounded-sm hover:cursor-text"
                />
            </div>
            <button
                type="submit"
                className="bg-slate-700 rounded-md text-gray-300 p-2 hover:cursor-pointer"
            >
                LogIn
            </button>
        </form>
        // </>
    );
};
export default Login;
