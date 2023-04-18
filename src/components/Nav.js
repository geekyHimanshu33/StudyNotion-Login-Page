import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';


import logo from "../assets/Logo.svg";

function Nav(props) {
    const navigate =useNavigate();
    const setisLogIn = props.setisLogIn;
  const isLogIn = props.isLogIn;


  function HandleLogOut(){
    setisLogIn(false);
    navigate("/");
    toast.success("Logged Out");
  }
  return (
    <div className="max-w-[1200px]  flex items-center justify-between px-8 py-5 mx-auto">
      {/* logo */}
      <Link to="/" className="select-none">
        <img src={logo} alt="" className="w-[160px] h-[32px]"></img>
      </Link>

      {/* LINKS */}

      <div className=" flex gap-x-7 text-[19px] text-gray-400">
        <Link to="/" className="select-none">
          Home
        </Link>
        <Link to="/" className="select-none">
          About
        </Link>
        <Link to="/" className="select-none">
          Contact
        </Link>
      </div>

      {/* Buttons */}

      <div className="flex gap-x-4">
        {isLogIn && 
          
            <button className="text-[rgb(175,178,191)] bg-[rgb(22,29,41)] border-[1px] border-solid border-gray-400 rounded-[8px] px-[12px] py-[8px]" onClick={HandleLogOut}>
              Log Out
            </button>
          
        }
        {isLogIn && 
          <Link to="/Dashboard">
            <button className="text-[rgb(175,178,191)] bg-[rgb(22,29,41)] border-[1px] border-solid border-gray-400 rounded-[8px] px-[12px] py-[8px]">
              Dashboard
            </button>
          </Link>
        }

        {!isLogIn && 
          <Link to="/Login">
            <button className="text-[rgb(175,178,191)] bg-[rgb(22,29,41)] border-[1px] border-solid border-gray-400 rounded-[8px] px-[12px] py-[8px]">
              Log in
            </button>
          </Link>
        }
        {!isLogIn && 
          <Link to="Signup">
            <button className="text-[rgb(175,178,191)] bg-[rgb(22,29,41)] border-[1px] border-solid border-gray-400 rounded-[8px] px-[12px] py-[8px]">
              Sign in
            </button>
          </Link>
        }

      </div>
    </div>
  );
}

export default Nav;
