import { Formik, Form } from "formik";
// eslint-disable-next-line no-unused-vars
import React from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import FormikInput from "./FormikInput";
import axios from "axios";
import { toast } from "react-hot-toast";
function Loginpage() {
  const navigate = useNavigate();
  function handelCallAPI(values) {
    axios
      .post("https://myeasykart.codeyogi.io/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("Token", token);

        const users = JSON.stringify(user);
        localStorage.setItem("user", users);
        toast.success("Login Sucessfull");
        navigate("/auth/ProductList");
      })
      .catch(() => {
        toast.error("Invalid Creadentials");
      });
  }

  const LoginSchema = Yup.object().shape({
    password: Yup.string().min(6, "Too short").max(12, "Too Long").required(),
    email: Yup.string().email().required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-yellow-50">
        <Formik
          initialValues={initialValues}
          onSubmit={handelCallAPI}
          validationSchema={LoginSchema}
          validateOnMount
        >
          <Form className="flex flex-col p-5 space-y-4 bg-white rounded-md shadow-md w-80">
            <h1 className="font-serif text-2xl text-center">
              Login to Todo App
            </h1>

            <FormikInput
              name="email"
              id="email-address"
              type="email"
              required
              autoComplete="email"
              label="Email"
              placeholder="Email-address"
            />

            <FormikInput
              name="password"
              id="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="Password"
              label="password"
            />
            <div className=" text-sm text-gray-400">
              Dont have an account?{" "}
              <Link
                to="/auth/sign-up"
                className="px-2 py-1 text-white  hover:bg-[#00538C] bg-[#002D62]  rounded-xl"
              >
                Signup
              </Link>
            </div>
            <button
              type="submit"
              className="p-2 mx-1 text-white  rounded-lg  hover:bg-[#00538C] bg-[#002D62]  "
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Loginpage;
