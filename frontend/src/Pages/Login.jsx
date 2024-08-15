import { useState } from "react";
import { Link } from "react-router-dom";
import LogInHook from "../Hooks/LoginHook";
import SideDesign from "../Components/SideDesign";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = LogInHook();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ userName, password });
  };
  return (
    <>
    <SideDesign />
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
          <form onSubmit={handleSubmit}>
            <div className="label">
            <span className="label-text text-xl text-black">UserName</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="custom-placeholder input input-bordered w-full max-w-xs"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                color: "black",
              }}
            />

            <div className="label">
              <span className="label-text text-xl text-black">Password</span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="custom-placeholder input input-bordered w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                color: "black",
              }}
            />
            <div
              style={{
                color: "white",
                margin: "10px",
                marginTop: "20px",
                textDecoration: "underline",
                fontSize: "20px",
              }}
            >
              <Link to="/signup">Create account </Link>
            </div>
            <div>
              <button
                className="btn btn-block btn-sm mt-2"
                style={{
                  height: "40px",
                }}
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner loading-md"></span> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
