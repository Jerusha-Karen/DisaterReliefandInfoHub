import React, { useState } from "react";
import axios from "axios";

const Donation = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    amount: "",
    cause: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/donations", formData);
      alert("Donation submitted successfully!");
      setFormData({ donorName: "", amount: "", cause: "" });
    } catch (error) {
      console.error("Error submitting donation:", error);
      alert("Failed to submit donation");
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://cdn.vectorstock.com/i/500p/36/11/hands-donate-hearts-charity-volunteer-vector-34943611.jpg')",
      }}
    >
      <div className="max-w-md w-full bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-300">
        <h2 className="text-xl font-bold mb-6 text-center text-black">Donation Form</h2>
  
        {/* Disclaimer Section */}
        <div className="bg-white/40 backdrop-blur-sm p-4 rounded-md border border-gray-300 mb-6 text-black text-sm">
          <blockquote className="italic">
            <p className="mb-2">
              <span className="font-bold">DISCLAIMER</span>
              <br />
              We wish to caution our supporters against fraudulent messages
              requesting donations through unofficial channels or social media
              platforms.
            </p>
            <p className="mb-2">
              Please note that{" "}
              <span className="font-semibold">ReliefAid Organization</span> has
              not authorized any individual, agency, or third-party entity to
              collect funds on our behalf. All contributions should be made only
              through our official website.
            </p>
            <p>
              If you receive any suspicious messages, kindly report them to our
              helpline at <span className="font-medium">9876543210</span> or{" "}
              <span className="font-medium">9876543211</span>.
            </p>
          </blockquote>
        </div>
  
        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Name of Donor</label>
            <input
              type="text"
              name="donorName"
              value={formData.donorName}
              onChange={handleChange}
              required
              className="p-2 border border-gray-400 rounded-md text-sm bg-white/80 text-black placeholder-gray-500"
              placeholder="Enter your name"
            />
          </div>
  
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Donation Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="p-2 border border-gray-400 rounded-md text-sm bg-white/80 text-black placeholder-gray-500"
              placeholder="Enter amount"
            />
          </div>
  
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Cause of Donation</label>
            <select
              name="cause"
              value={formData.cause}
              onChange={handleChange}
              required
              className="p-2 border border-gray-400 rounded-md text-sm bg-white/80 text-black"
            >
              <option value="" disabled>
                -- Select Cause --
              </option>
              <option value="Natural Disaster">Natural Disaster</option>
              <option value="Medical Relief">Medical Relief</option>
              <option value="Education Support">Education Support</option>
              <option value="Food & Water">Food & Water</option>
              <option value="Shelter Assistance">Shelter Assistance</option>
              <option value="Others">Others</option>
            </select>
          </div>
  
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
  4  
};

export default Donation;
