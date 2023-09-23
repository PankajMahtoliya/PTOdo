/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
function Card(props) {
  return (
    <div className="rounded-md px-4 py-2 bg-[#F0F4F8] shadow-xl">
      {props.children}
    </div>
  );
}
export default Card;
