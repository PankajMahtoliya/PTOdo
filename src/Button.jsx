/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
function Button(props) {
  let themeClasses =
    "text-white bg-[#002D62]  border-transparent hover:bg-[#00538C] ";

  let radiusClass = "rounded-md";
  if (props.theme === "highlight") {
    radiusClass = "rounded-full";
  }

  if (props.theme === "secondary") {
    themeClasses = "text-blue-gray-500 bg-white border-gray-300";
  }

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={
        "inline-flex justify-center px-4 py-2 text-sm font-medium border  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " +
        themeClasses +
        "" +
        radiusClass
      }
    >
      {props.icon && (
        <span className="mr-2 text-lg -mt-1 inline-block">{props.icon}</span>
      )}
      {props.children}
    </button>
  );
}
export default Button;
