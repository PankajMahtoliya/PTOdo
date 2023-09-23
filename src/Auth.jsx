// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

import NotFound from "./NotFound";
import SignUpPage from "./SignUpPage";
import Loginpage from "./Loginpage";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
function Auth() {
  const authToken = localStorage.getItem("Token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) {
      navigate("/auth/sign-in");
    } else {
      navigate("/app");
    }
  }, [authToken]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="sign-in" />} />
        <Route path="sign-in" element={<Loginpage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Auth;
