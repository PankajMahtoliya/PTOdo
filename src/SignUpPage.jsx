// eslint-disable-next-line no-unused-vars
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import FormikInput from "./FormikInput";
import axios from "axios";
import { toast } from "react-hot-toast";
// import { toast } from "react-toastify";

function SignUpPage() {
  const navigate = useNavigate();
  function handelCallAPI(values) {
    axios
      .post("  https://myeasykart.codeyogi.io/signup ", {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("Token", token);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Regiter Successfull");
        navigate("/");
      })
      .catch(() => {
        toast.error("Regiter Failed");
      });
  }

  const SignUpSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!!")
      .required("Please provide your lovely name"),
    password: Yup.string()
      .min(6, "Too short")
      .max(12, "Too Long")
      .required("Must Required Field"),
    ConfirmPassword: Yup.string()
      .min(6, "Too short")
      .max(12, "Too Long")
      .required("Must Required Field"),
    email: Yup.string().email().required("Required"),
  });

  const initialValue = {
    fullName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  };

  return (
    <div className="h-screen ">
      <div className="flex items-center justify-center w-full h-screen md:h-full py-8 bg-gray-100">
        <Formik
          initialValues={initialValue}
          onSubmit={handelCallAPI}
          validationSchema={SignUpSchema}
          validateOnMount
        >
          <Form class="flex flex-col  w-96 p-5 rounded-xl shadow-md bg-white space-y-4">
            <h1 className="text-2xl font-serif text-center">
              Sign-Up to Todo App
            </h1>
            <FormikInput
              placeholder="full-Name"
              name="fullName"
              id="fullName"
              type="text"
              label="full-Name"
              required
            />

            <FormikInput
              placeholder="Email-address"
              label="Email-Address"
              name="email"
              id="emailaddress"
              type="email"
              required
              autoComplete="email"
            />

            <FormikInput
              placeholder="Password"
              label="Password"
              name="password"
              id="password"
              type="password"
              required
              autoComplete="current-password"
            />

            <FormikInput
              placeholder="Confirm Password"
              label="Current-Passwors"
              name="ConfirmPassword"
              id="ConfirmPassword"
              type="password"
              required
              autoComplete="current-password"
            />

            <div className="text-gray-400 font-serif text-sm space-x-6">
              Already have an account?{" "}
              <Link
                to="/auth/sign-in"
                class="text-white  hover:bg-[#00538C] bg-[#002D62]  px-2 py-1 rounded-xl"
              >
                Login
              </Link>
            </div>
            <button
              type="submit"
              className="  hover:bg-[#00538C]  bg-[#002D62]  rounded-lg text-white font-serif p-2 mx-1"
            >
              Create My Account
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUpPage;
