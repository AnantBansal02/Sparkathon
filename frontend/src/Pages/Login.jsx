import { useState } from "react";
import { Link } from "react-router-dom";
import LogInHook from "../Hooks/LoginHook";

const Login = () =>{
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const {loading, login} = LogInHook();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await login({userName,password});
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-7 bg-gray-500 rounded-md bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-20'>
            <h1 className='text-3xl font-semibold text-center text-black'>
                Login </h1>
                    <form >
                        <label className="form-control w-full max-w-xs p-3">
                            <div className="label">
                                <span className="label-text text-xl text-black">UserName</span>
                            </div>
                        </label>

                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={userName} onChange={(e) => setUserName(e.target.value)}/>

                        <div className="label">
                            <span className="label-text text-xl text-black">Password</span>
                        </div>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <br/>
                        <Link to='/signUp' className="link link-primary">Create account</Link>
                    <div>
                    <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                        {loading ? <span className="loading loading-spinner loading-md"></span> : "Login"}
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;