import React, { useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast, Slide } from "react-toastify"; // Correct imports
import "react-toastify/dist/ReactToastify.css"; // Import styles for Toastify

const FormValidation = () => {
  const defaultFormData = {
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState({});
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    contact: Yup.string()
      .required("Contact is required")
      .min(10, "Contact must be at least 10 digits")
      .max(10, "Contact must be at most 10 digits"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({}); // Clear errors right before showing the success toast
      toast.success("Form submitted successfully!"); // Display success toast
    } catch (error) {
      if (error.inner) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setErrors(errors);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData(defaultFormData);
    setErrors({});
  };

  return (
    <div className="max-w-lg  w-1/4 border-2 border-white rounded-md p-6">
      <form onSubmit={handleSubmit} className="flex flex-col max-w-3xl">
        <label htmlFor="first_name">First Name</label>
        {errors.first_name && (
          <p className="text-red-600 text-sm">{errors.first_name}</p>
        )}
        <input
          className="border mb-2 border-sky-500 rounded-md px-2 py-2"
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          className="border mb-2 border-sky-500 rounded-md px-2 py-2"
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
        />
        {errors.last_name && (
          <p className="text-red-600 text-sm">{errors.last_name}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          className="border mb-2 border-sky-500 rounded-md px-2 py-2"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        <label htmlFor="contact">Contact</label>
        <input
          className="border mb-2 border-sky-500 rounded-md px-2 py-2"
          type="number"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
        />
        {errors.contact && (
          <p className="text-red-600 text-sm">{errors.contact}</p>
        )}

        <label htmlFor="password">Password</label>
        <input
          className="border mb-2 border-sky-500 rounded-md px-2 py-2"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password}</p>
        )}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="border mb-2 border-sky-500 rounded-md px-2 py-2"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
        )}

        <div className="flex  gap-x-6 items-center">
          <button
            className="mt-6 border rounded-2xl bg-blue-600 text-white py-2 w-40 text-center mx-auto"
            type="reset"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="mt-6 border rounded-2xl bg-blue-600 text-white py-2 w-40 text-center mx-auto"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Toast container with slide transition */}
      <ToastContainer transition={Slide} autoClose={2000} limit={1} />
    </div>
  );
};

export default FormValidation;
