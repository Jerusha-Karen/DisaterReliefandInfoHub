import React, { useState } from 'react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    interest: '',
    verified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.verified) {
      return alert("Please verify you are not a robot.");
    }
  
    try {
      const response = await fetch("http://localhost:3000/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Thank you for volunteering!");
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          phone: "",
          skills: "",
          availability: "",
          interest: "",
          verified: false,
        });
      } else {
        alert(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error occurred.");
    }
  };

  return (
    <div
  className="w-screen min-h-screen h-fit bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center px-4 py-8"
  style={{
    backgroundImage:
      "url('./volunteer.png')",
  }}
>

      <div className="relative z-10 backdrop-blur-md bg-white/50 p-8 rounded-2xl shadow-lg max-w-xl w-full text-black">
        <h2 className="text-3xl font-bold text-center mb-6">Volunteer Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-1/2 p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none text-black"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-1/2 p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none text-black"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none text-black"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none text-black"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none text-black"
            onChange={handleChange}
            required
          />
          <textarea
            name="skills"
            placeholder="Skills / Training"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none text-black"
            rows="3"
            onChange={handleChange}
          ></textarea>
          <textarea
            name="interest"
            placeholder="What do you want to volunteer for?"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none text-black"
            rows="3"
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="date"
            name="availability"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none text-black"
            onChange={handleChange}
            required
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="verified"
              onChange={handleChange}
            />
            <label htmlFor="verified">I'm not a robot</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
