/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
function CheckBox(props) {
  return (
    <input
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
      className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
    />
  );
}
export default CheckBox;
