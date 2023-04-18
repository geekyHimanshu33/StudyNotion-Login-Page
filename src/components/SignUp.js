import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import frame from "../assets/frame.png";
import signup from "../assets/signup.png";
import { toast } from "react-hot-toast";

function SignUp(props) {
  let setLogin = props.setisLogIn;
  const navigate = useNavigate();
  const [showCreatePassword, setshowCreatePassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const [SignUpData, setSignUpData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    CreatePassword: "",
    ConfirmPassword: "",
  });
  function HandleChange(event) {
    setSignUpData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function handleEye(event) {
    event.preventDefault();
    if (showCreatePassword) {
      setshowCreatePassword(false);
    } else {
      setshowCreatePassword(true);
    }
  }
  function handleConfirmEye(e) {
    e.preventDefault();
    if (showConfirmPassword) {
      setshowConfirmPassword(false);
    } else {
      setshowConfirmPassword(true);
    }
  }
  function HandleSubmit(e) {
    e.preventDefault();

    console.log(SignUpData);
    if (SignUpData.CreatePassword !== SignUpData.ConfirmPassword) {
      toast.error("Password Not Same");
    } else {
      setLogin(true);
      navigate("/Dashboard");
      toast.success("Account Created!");
    }
  }
  const [accountType, setAccountType] = useState("student");

  return (
    <div className="max-w-[1200px] mx-auto px-8 mt-10 mb-10 flex justify-between items-center">
      <div className="flex flex-col justify-center items-start max-w-[450px] gap-y-6  ">
        <h2 className="text-[1.875rem] leading-[2.375rem] text-richblack-5 font-semibold">
          Join the millions learning to code with StudyNotion for free
        </h2>

        <p className="text-gray-500 text-[1.15rem]">
          Build skills for today, tomorrow, and beyond.<br></br>
          <span className="text-blue-300 italic">
            {" "}
            Education to future-proof your career.
          </span>
        </p>

        <div className="flex gap-x-1 bg-gray-800  p-1 rounded-full  ">
          <button
            className={`${
              accountType === "student"
                ? "bg-[rgba(0,8,20,1)] text-richblack-5"
                : "bg-transparent text-gray-400"
            } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("student")}
          >
            Student
          </button>

          <button
            className={`${
              accountType === "instructor"
                ? "bg-[rgba(0,8,20,1)] text-richblack-5"
                : "bg-transparent text-gray-400"
            } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}
          >
            Instructor
          </button>
        </div>

        <form  onSubmit={HandleSubmit}>
          <div className="flex items-start gap-x-4">
            <div className="flex flex-col items-start mb-5 ">
              <label htmlFor="FirstName" className="text-[16px] mb-1">
                First Name<sup className="text-pink-700 ">*</sup>
              </label>

              <input
                type="text"
                required
                name="FirstName"
                onChange={HandleChange}
                value={SignUpData.FirstName}
                placeholder="Enter First Name"
                className="w-full p-[12px] rounded-[8px] text-gray-100 bg-gray-800"
              ></input>
            </div>

            <div className="flex flex-col items-start mb-5 ">
              <label htmlFor="LastName" className="text-[16px] mb-1">
                Last Name<sup className="text-pink-700 ">*</sup>
              </label>

              <input
                type="text"
                required

                name="LastName"
                onChange={HandleChange}
                value={SignUpData.LastName}
                placeholder="Enter Last Name"
                className="w-full p-[12px] rounded-[8px] text-gray-100 bg-gray-800"
              ></input>
            </div>
          </div>

          <div className="flex flex-col items-start mb-5 ">
            <label htmlFor="Email" className="text-[16px] mb-1">
              Email Address<sup className="text-pink-700 ">*</sup>
            </label>

            <input
              type="email"
              name="Email"
              required

              onChange={HandleChange}
              value={SignUpData.Email}
              placeholder="Enter Email Address"
              className="w-full p-[12px] rounded-[8px] text-gray-100 bg-gray-800"
            ></input>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="flex flex-col items-start">
              <label htmlFor="CreatePassword" className="text-[13px] mb-1">
                Create Password<sup className="text-pink-700">*</sup>
              </label>

              <div className="relative w-full">
                <input
                  type={showCreatePassword ? "text" : "password"}
                  name="CreatePassword"
                required

                  onChange={HandleChange}
                  placeholder="Enter Password"
                  value={setSignUpData.CreatePassword}
                  className="w-full p-[12px]  rounded-[8px] text-gray-100 bg-gray-800"
                ></input>

                <button
                  className="absolute right-[2%]  top-[25%] "
                  onClick={handleEye}
                >
                  {showCreatePassword ? (
                    <AiFillEye className="text-[1.575rem] text-gray-500" />
                  ) : (
                    <AiFillEyeInvisible className="text-[1.575rem] text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="ConfirmPassword" className="text-[13px] mb-1">
                Confirm Password<sup className="text-pink-700">*</sup>
              </label>

              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="ConfirmPassword"
                required

                  onChange={HandleChange}
                  placeholder="Confirm Password"
                  value={setSignUpData.ConfirmPassword}
                  className="w-full p-[12px]  rounded-[8px] text-gray-100 bg-gray-800"
                ></input>

                <button
                  className="absolute right-[2%]  top-[25%] "
                  onClick={handleConfirmEye}
                >
                  {showConfirmPassword ? (
                    <AiFillEye className="text-[1.575rem] text-gray-500" />
                  ) : (
                    <AiFillEyeInvisible className="text-[1.575rem] text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-[30px] ">
            <button
              className="bg-yellow-400 w-full text-gray-800 px-[12px] py-[8px] font-semibold rounded-[8px]  "
             
            >
              Create Account
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

      <div className="p-3 relative max-w-[450px]">
        <img
          src={frame}
          alt="frame"
          className="  z-[1] w-[558px] h-[504]"
        ></img>
        <img
          src={signup}
          alt="frame"
          className=" absolute top-[30px] right-[30px] z-[10] w-[558px] h-[504]"
        ></img>
      </div>
    </div>
  );
}

export default SignUp;
