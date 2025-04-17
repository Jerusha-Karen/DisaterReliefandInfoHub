import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const { name, email, password } = formData;
  
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        // On successful registration, navigate to login page
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
        // Show error message via alert if available, else a generic error message
        if (err.response && err.response.data && err.response.data.error) {
          alert(`Error: ${err.response.data.error}`);
        } else {
          alert("An error occurred during registration");
        }
      });
  };
  
  console.log("SignUp component rendered");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl text-black font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              autoComplete="current-password"
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-center text-gray-600 mt-4">Already Have an Account</p>
        <Link
          to="/login"
          className="flex justify-center w-full mt-2 py-2 border rounded-lg text-gray-700 hover:bg-gray-200"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
