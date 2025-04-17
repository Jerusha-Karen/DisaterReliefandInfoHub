import React, { useState } from "react";
import axios from "axios";

const DonateBlood = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    bloodGroup: "",
    donatedBefore: "",
    takesMedicine: "",
    drugUsage: "",
    govtId: "",
    verifyText: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/donateblood", formData);
      alert("Thank you for your submission!");
      console.log("Submitted Data:", formData);
      setFormData({
        name: "",
        email: "",
        gender: "",
        age: "",
        weight: "",
        height: "",
        bloodGroup: "",
        donatedBefore: "",
        takesMedicine: "",
        drugUsage: "",
        govtId: "",
        verifyText: "",
        consent: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div
      className="w-screen min-h-screen h-fit bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage:
          "url('https://www.kelsey-seybold.com/-/media/Project/KelseySeybold/KelseySeyboldClinic/Images/Blog-Images/donating-blood-banner.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="relative z-10 backdrop-blur-md bg-white/50 p-8 rounded-2xl shadow-lg max-w-xl w-full space-y-4 text-black"
      >
        <h2 className="text-center text-3xl font-bold text-red-700">Donate Blood - Save Lives</h2>
        <p className="text-center text-sm mb-4">
          Donating blood is a very generous service to a fellow human being.
        </p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none"
        />

        {/* Gender */}
        <div>
          <label className="block font-semibold mb-1">Your Gender:</label>
          <div className="flex flex-col gap-1">
            {["Male", "Female", "Prefer not to say"].map((g) => (
              <label key={g} className="flex items-center gap-2">
                <input type="radio" name="gender" value={g} onChange={handleChange} required />
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="block font-semibold mb-1">Is your age over 18 and below 50?</label>
          <div className="flex gap-4">
            {["Yes", "No"].map((a) => (
              <label key={a} className="flex items-center gap-2">
                <input type="radio" name="age" value={a} onChange={handleChange} required />
                {a}
              </label>
            ))}
          </div>
        </div>

        {/* Weight */}
        <div>
          <label className="block font-semibold mb-1">Is your weight above 50 kg?</label>
          <div className="flex gap-4">
            {["Yes", "No"].map((w) => (
              <label key={w} className="flex items-center gap-2">
                <input type="radio" name="weight" value={w} onChange={handleChange} required />
                {w}
              </label>
            ))}
          </div>
        </div>

        {/* Height */}
        <div>
          <label className="block font-semibold mb-1">Is your height above 5 feet?</label>
          <div className="flex gap-4">
            {["Yes", "No"].map((h) => (
              <label key={h} className="flex items-center gap-2">
                <input type="radio" name="height" value={h} onChange={handleChange} required />
                {h}
              </label>
            ))}
          </div>
        </div>

        {/* Blood Group */}
        <div>
          <label className="block font-semibold mb-1">What is your blood group?</label>
          <div className="flex flex-wrap gap-2">
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
              <label key={bg} className="flex items-center gap-1">
                <input type="radio" name="bloodGroup" value={bg} onChange={handleChange} required />
                {bg}
              </label>
            ))}
          </div>
        </div>

        {/* Donated Before */}
        <div>
          <label className="block font-semibold mb-1">Have you donated blood before?</label>
          {["Yes", "No"].map((d) => (
            <label key={d} className="flex items-center gap-2">
              <input type="radio" name="donatedBefore" value={d} onChange={handleChange} required />
              {d}
            </label>
          ))}
        </div>

        {/* Medication */}
        <div>
          <label className="block font-semibold mb-1">Do you take any regular medication?</label>
          {["Yes", "No"].map((m) => (
            <label key={m} className="flex items-center gap-2">
              <input type="radio" name="takesMedicine" value={m} onChange={handleChange} required />
              {m}
            </label>
          ))}
        </div>

        {/* Drug Usage */}
        <div>
          <label className="block font-semibold mb-1">Do you take any addictive substances?</label>
          {["Occasionally", "Yes", "No"].map((d) => (
            <label key={d} className="flex items-center gap-2">
              <input type="radio" name="drugUsage" value={d} onChange={handleChange} required />
              {d}
            </label>
          ))}
        </div>

        <input
          type="text"
          name="govtId"
          placeholder="Your Govt ID Number"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none"
        />
        <input
          type="text"
          name="verifyText"
          placeholder="Verify text"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none"
        />

        {/* Consent */}
        <div className="flex items-center gap-2">
          <input type="checkbox" name="consent" onChange={handleChange} required />
          <label>I agree that all the above information is true.</label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonateBlood;
