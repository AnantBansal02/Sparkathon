import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpHook from "../Hooks/SignUpHook";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = SignUpHook();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(input);
    await signup(input);
  };

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
            SignUp{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              className="custom-placeholder input input-bordered w-full max-w-xs"
              style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                color: "black",
              }}
              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
            />

            <div className="label">
              <span className="label-text text-xl text-black">UserName</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="custom-placeholder input input-bordered w-full max-w-xs"
              style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                color: "black",
              }}
              value={input.userName}
              onChange={(e) => setInput({ ...input, userName: e.target.value })}
            />

            <div className="label">
              <span className="label-text text-xl text-black">Password</span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="custom-placeholder input input-bordered w-full max-w-xs"
              style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                color: "black",
              }}
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />

            <div className="label">
              <span className="label-text text-xl text-black">
                Confirm Password
              </span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="custom-placeholder input input-bordered w-full max-w-xs"
              style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                color: "black",
              }}
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
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
              <Link to="/login">Already have an account</Link>
            </div>
            <div>
              <button
                className="btn btn-block btn-sm mt-2"
                style={{
                  height: "40px",
                }}
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
