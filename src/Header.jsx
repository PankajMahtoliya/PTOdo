// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
function Header(props) {
  return (
    <div className="px-12 bg-[#002D62] w-full  fixed py-2 shadow items-center flex justify-between ">
      <span className=" text-3xl items-end flex justify-between  font-semibold text-white">
        PTodo
        <span className="text-xl ml-1 font-medium">
          : A Webapp to manage your task{" "}
        </span>
      </span>
    </div>
  );
}
export default Header;
