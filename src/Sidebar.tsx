// eslint-disable-next-line no-unused-vars
import React from "react";
import { downloadHTMLAsFile, unslugifyName } from "./helper";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoHistory } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";
import cx from "classnames";
import { toast } from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
function Sidebar(props) {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const me = JSON.parse(user!);
  const onHandleClick = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("user");
    navigate("/");
    toast.success("Logged Out SuccessFully");
  };
  const search = useLocation();

  return (
    <div className=" py-4 mt-16 h-full  rounded-e-lg fixed shadow-lg justify-between bg-[#002D62] items-center  flex flex-col  w-56">
      <div className="w-full">
        {" "}
        <Link
          className={cx(
            " flex items-center px-2 focus:bg-[#00538C] py-2 text-xl text-white w-full",
            search.pathname.includes("Todo") ? " bg-[#00538C] " : ""
          )}
          to={"/app/Todo"}
        >
          <AiOutlineHome className="mr-3" size={30} /> Home Page
        </Link>
        <Link
          className={cx(
            " flex items-center px-2 focus:bg-[#00538C] py-2 text-xl text-white w-full",
            search.pathname.includes("History") ? " bg-[#00538C] " : ""
          )}
          to={"/app/History"}
        >
          <GoHistory className="mr-3" size={30} /> History
        </Link>
        <Link
          className={cx(
            " flex items-center px-2 focus:bg-[#00538C] py-2 text-xl text-white w-full",
            search.pathname.includes("Profile") ? " bg-[#00538C] " : ""
          )}
          to={"/app/Profile"}
        >
          <CgProfile className="mr-3" size={30} /> Profile
        </Link>
      </div>
      <div className="self-baseline mb-20 flex items-center shrink-0 px-2 focus:bg-[#00538C] py-2 text-xl text-white w-full">
        {unslugifyName(me.full_name)}{" "}
        <BiLogIn
          onClick={onHandleClick}
          className="ml-3 cursor-pointer"
          size={30}
        />
      </div>
    </div>
  );
}
export default Sidebar;
