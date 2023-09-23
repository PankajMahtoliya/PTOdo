/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import CheckBox from "./CheckBox";
import { RiDeleteBin6Fill } from "react-icons/ri";

function TodoRow(props) {
  const onCheckboxChange = () => {
    props.onStatusChange(props.todo);
  };
  const onDelete = () => {
    props.onDelete(props.todo);
  };

  return (
    <div className="flex items-center py-1">
      <CheckBox checked={props.done} onChange={onCheckboxChange} />
      <span className="ml-2 mr-2 text-sm font-medium text-gray-700">
        {props.todo.title}
      </span>
      <RiDeleteBin6Fill onClick={onDelete}></RiDeleteBin6Fill>
    </div>
  );
}
export default TodoRow;
