// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Link to={"/"}>404-Error No route Found </Link>{" "}
    </div>
  );
}

export default NotFound;
