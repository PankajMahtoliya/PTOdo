// eslint-disable-next-line no-unused-vars
import React from "react";
import { useField } from "formik";

// eslint-disable-next-line react/prop-types
function FormikInput({ id, label, className, name, ...rest }) {
  const area = useField(name);

  const [data, meta] = area;
  const { value, onBlur, onChange } = data;
  const { touched, error } = meta;

  let borderClass = "border-gray-300 focus:border-indigo-500 ";

  if (error && touched) {
    borderClass = "border-red-400";
  }

  return (
    <>
      <div>
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          className={
            "relative block w-full appearence-none rouded-md border  px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-indigo-500 sm:text-sm" +
            className +
            " " +
            borderClass
          }
          {...rest}
        />

        {touched && error && <div className="text-red-700 ">{error}</div>}
      </div>
    </>
  );
}

export default FormikInput;
