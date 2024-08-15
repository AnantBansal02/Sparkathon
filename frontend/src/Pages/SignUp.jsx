
import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = ()=>{
        const [input,setInput] = useState({
            fullName: '',
            userName: '',
            password: '',
            confirmPassword: ''
        });

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-7 bg-gray-500 rounded-md bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-20'>
            <h1 className='text-3xl font-semibold text-center text-black'>
                SignUp </h1>
                    <form >
                        <label className="form-control w-full max-w-xs p-3">
                            <div className="label">
                                <span className="label-text text-xl text-black">FullName</span>
                            </div>
                        </label>

                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={input.fullName} onChange={(e) => setInput({...input, fullName: e.target.value})}/>

                        <div className="label">
                            <span className="label-text text-xl text-black">UserName</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={input.userName} onChange={(e)=> setInput({...input, userName: e.target.value})}/>
                        
                        <div className="label">
                            <span className="label-text text-xl text-black">Password</span>
                        </div>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={input.password} onChange={(e)=> setInput({...input, password: e.target.value})}/>

                        <div className="label">
                            <span className="label-text text-xl text-black">Confirm Password</span>
                        </div>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
                        value={input.confirmPassword} onChange={(e)=> setInput({...input, confirmPassword: e.target.value})}/>

                    <Link to='/login' className="link link-primary">Already have an account</Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">
                            SignUp
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
