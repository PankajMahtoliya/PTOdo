// eslint-disable-next-line no-unused-vars
import React from "react";

import NotFound from "./NotFound";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const AppPageLazy = React?.lazy(() => import("./Ap"));
  const AuthPageLazy = React?.lazy(() => import("./Auth"));
  const Token = localStorage?.getItem("Token");
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={Token ? "/app" : "/auth"} />}
        />

        <Route path="app/*" element={<AppPageLazy />} />
        <Route path="auth/*" element={<AuthPageLazy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
