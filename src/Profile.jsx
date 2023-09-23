// eslint-disable-next-line no-unused-vars
import React from "react";
import { unslugifyName } from "./helper";
import moment from "moment";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Container from "./Container";

// import { useNavigate } from "react-router";
// import { unslugifyName } from "./helper";

// eslint-disable-next-line react/prop-types
function Profile() {
  const user = localStorage.getItem("user");
  const me = JSON.parse(user);

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />

        <Container>
          <div className=" bg-yellow-50  h-screen  ml-80 w-full ">
            <div className="bg-[#002D62] w-max  h-max  px-4 py-5 rounded-xl mt-56 shadow-md-">
              <div className="">
                <Link to={"/app"} className="  text-white ">
                  <FiArrowLeft className="text-3xl" />
                </Link>
                <h1 className="text-4xl font-semibold mb-4 mr-8 text-white">
                  My Profile
                </h1>
              </div>
              <div className="flex space-x-8">
                {" "}
                <h1 className=" text-2xl font-semibold text-white">
                  Name :
                </h1>{" "}
                <h1 className=" text-2xl  text-white">
                  {" "}
                  {unslugifyName(me.full_name)}
                </h1>
              </div>
              <div className="flex space-x-8">
                {" "}
                <h1 className=" text-2xl font-semibold text-white">
                  Email :
                </h1>{" "}
                <h1 className=" text-2xl  text-white">
                  {" "}
                  {unslugifyName(me.email)}
                </h1>
              </div>
              <div className="flex space-x-8">
                {" "}
                <h1 className=" text-2xl font-semibold text-white">
                  Joined:
                </h1>{" "}
                <h1 className=" text-2xl  text-white">
                  {" "}
                  {moment(me.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                </h1>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Profile;
