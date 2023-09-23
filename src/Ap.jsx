/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import Profile from "./Profile";
import TodoPage from "./TodoPage";
import History from "./History";

function App() {
  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");
  const User = localStorage.getItem("user");

  useEffect(() => {
    if (!Token && !User) {
      navigate("/auth/sign-in");
    }
  }, [Token, User, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/app/Todo" />} />
        <Route path="Todo" element={<TodoPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
