import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });
  return (
    <>
      <style>
        {`
          .custom-placeholder::placeholder {
            color: rgb(0,0,0,0.7);
            }
        `}
      </style>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div
          className="w-full p-7 bg-gray-500 rounded-md bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-20"
        >
          <h1 className="text-3xl font-semibold text-center text-black">
            Login{" "}
          </h1>
          <form>
              <div className="label">
                <span className="label-text text-xl text-black">UserName</span>
              </div>
            <input
              type="text"
              placeholder="Type here"
              className="custom-placeholder input input-bordered w-full max-w-xs"
              value={input.userName}
              onChange={(e) => setInput({ ...input, userName: e.target.value })}
              style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                color: "black",
              }}
            />

            <div className="label">
              <span className="label-text text-xl text-black">Password</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="custom-placeholder input input-bordered w-full max-w-xs"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                color: "black",
              }}
            />
            <div style={{
                color: "white",
                margin: "10px",
                marginTop: "20px",
                textDecoration: "underline",
                fontSize: "20px",
              }}>
                <Link to="/signUp">Create account </Link>
            </div>
            <div>
              <button className="btn btn-block btn-sm mt-2" style={{
                  height: "40px",
                }}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
