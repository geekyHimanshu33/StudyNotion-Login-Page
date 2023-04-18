import { useState } from "react";
// import {Link} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import frame from "../assets/frame.png";
import login from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';


function LoginPage(props) {

    const navigate = useNavigate();
  //   let isLogin =props.isLogIn;
  let setLogin = props.setisLogIn;
  const [showPassword, setshowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    Email: "",
    password: "",
  });

  function handleEye(event) {
    event.preventDefault();
    if (showPassword) {
      setshowPassword(false);
    } else {
      setshowPassword(true);
    }
  }

  function HandleChange(event) {
    setLoginData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function HandleSubmit(e) {
    e.preventDefault();
    
    setLogin(true);
    navigate("/Dashboard")
    toast.success("Logged in Successfully")

  }

  return (
    <div className="max-w-[1200px] mx-auto px-8 mt-10 flex justify-between items-center">
      {/* login */}
      <div className="flex flex-col justify-center min-w-[450px] gap-y-6  ">
        <h2 className="text-[1.875rem] leading-[2.375rem] text-richblack-5 font-semibold">
          Welcome Back
        </h2>

        <p className="text-gray-500 text-[1.15rem]">
          Build skills for today, tomorrow, and beyond.<br></br>
          <span className="text-blue-300 italic">
            {" "}
            Education to future-proof your career.
          </span>
        </p>

        <form action="" onSubmit={HandleSubmit}>
          <div className="flex flex-col items-start mb-5 ">
            <label htmlFor="Email" className="text-[16px] mb-1">
              Email Address<sup className="text-pink-700 ">*</sup>
            </label>

            <input
              type="email"
              name="Email"
              required

              onChange={HandleChange}
              value={loginData.Email}
              placeholder="Enter Email Address"
              className="w-full p-[12px] rounded-[8px] text-gray-100 bg-gray-800"
            ></input>
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="password" className="text-[16px] mb-1">
              Password<sup className="text-pink-700">*</sup>
            </label>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required

                onChange={HandleChange}
                placeholder="Enter Password"
                value={loginData.password}
                className="w-full p-[12px]  rounded-[8px] text-gray-100 bg-gray-800"
              ></input>

              <button
                className="absolute right-[2%]  top-[25%] "
                onClick={handleEye}
              >
                {showPassword ? (
                  <AiFillEye className="text-[1.575rem] text-gray-500" />
                ) : (
                  <AiFillEyeInvisible className="text-[1.575rem] text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col mt-[30px] ">
            
              <button className="bg-yellow-400 w-full text-gray-800 px-[12px] py-[8px] font-semibold rounded-[8px]  " >
                Sign in
              </button>
            

            <div className="flex items-center my-3 gap-x-3 ">
              <div className="w-full bg-gray-600 h-[1px]"></div>
              <p className="text-gray-600 text-[1.45rem] font-semibold">OR</p>
              <div className="w-full bg-gray-600 h-[1px]"></div>
            </div>

            <button className=" border-[1px] backdrop:border-solid border-gray-500 text-gray-300 px-[12px] py-[8px] font-semibold rounded-[8px] flex items-center justify-center gap-x-3 ">
              {" "}
              <FcGoogle /> Sign up with Google{" "}
            </button>
          </div>
        </form>
      </div>

      {/* image-section */}
      <div className="p-3 relative max-w-[450px]">
        <img
          src={frame}
          alt="frame"
          className="  z-[1] w-[558px] h-[504]"
        ></img>
        <img
          src={login}
          alt="frame"
          className=" absolute top-[30px] right-[30px] z-[10] w-[558px] h-[504]"
        ></img>
      </div>
    </div>
  );
}

export default LoginPage;
