import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const { email, password } = formData;

    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        // Check the response data for success/failure messages.
        if (result.data === "Success" || result.data.message === "Success") {
          navigate("/home");
        } else if (typeof result.data === "string") {
          alert(result.data);
        } else if (result.data.error) {
          alert(result.data.error);
        } else if (result.data.message) {
          alert(result.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        // Show an alert for any error not caught above
        if (
          err.response &&
          err.response.data &&
          (err.response.data.error || err.response.data.message)
        ) {
          alert(
            err.response.data.error || err.response.data.message || "Login failed"
          );
        } else {
          alert("An error occurred during login");
        }
      });
  };

  console.log("LogIn component rendered");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl text-black font-bold text-center">Log In</h2>
        <form onSubmit={handleSubmit} className="mt-4">
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
            Log In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
