import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: "first-aid",
    title: "First Aid Basics",
    description: "Learn essential first aid skills for everyday emergencies.",
    videoUrl: "https://www.youtube.com/embed/4jA6Yc1E-cc",
  },
  {
    id: "cpr",
    title: "CPR Certification",
    description:
      "CPR for adults, children, and infants.",
    videoUrl: "https://www.youtube.com/embed/O9T0f3vTgZ4",
  },
  {
    id: "emergency-response",
    title: "Emergency Medical Response",
    description:
      "Advanced training for handling serious injuries.",
    videoUrl: "https://www.youtube.com/embed/Vu4aW9P9Z5E",
  },
  {
    id: "bleeding-control",
    title: "Bleeding Control (Stop the Bleed)",
    description:
      "Techniques for controlling traumatic bleeding.",
    videoUrl: "https://www.youtube.com/embed/M5vyE0j7nS8",
  },
  {
    id: "burn-care",
    title: "Burn Care and Wound Management",
    description:
      "Treating burns, cuts, and abrasions.",
    videoUrl: "https://www.youtube.com/embed/9LAByZP5s8A",
  },
  {
    id: "aed-training",
    title: "AED Training",
    description:
      "Practical use of AED devices during cardiac arrest.",
    videoUrl: "https://www.youtube.com/embed/Z_w1hSgx1DE",
  },
];

const TrainingCourses = () => {
  const navigate = useNavigate();

  const handleStartCourse = (course) => {
    localStorage.setItem("currentCourse", JSON.stringify(course));
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">
        Training & Certification
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-blue-800 mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              onClick={() => handleStartCourse(course)}
            >
              Start Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingCourses;
