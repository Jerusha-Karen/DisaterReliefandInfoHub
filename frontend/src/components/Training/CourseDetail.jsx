// CourseDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const courses = [
  {
    id: "first-aid",
    title: "First Aid Basics",
    description: "Learn essential first aid skills for everyday emergencies.",
    videoUrl: "https://www.youtube.com/embed/4EJbE6zJr4E",
  },
  {
    id: "cpr",
    title: "CPR Certification",
    description:
      "Get certified in Cardiopulmonary Resuscitation (CPR) for adults, children, and infants.",
    videoUrl: "https://www.youtube.com/embed/8YQM2W_vuGU",
  },
  {
    id: "emergency-response",
    title: "Emergency Medical Response",
    description:
      "Advanced training for handling serious injuries and medical emergencies.",
    videoUrl: "https://www.youtube.com/embed/vyLUI3Yzzw0",
  },
  {
    id: "bleeding-control",
    title: "Bleeding Control (Stop the Bleed)",
    description:
      "Hands-on techniques for controlling traumatic bleeding.",
    videoUrl: "https://www.youtube.com/embed/M4umyOY3J8Y",
  },
  {
    id: "burn-care",
    title: "Burn Care and Wound Management",
    description:
      "Specialized instruction for treating burns, cuts, and abrasions.",
    videoUrl: "https://www.youtube.com/embed/B-Z3BechRhw",
  },
  {
    id: "aed-training",
    title: "Automated External Defibrillator (AED) Training",
    description:
      "Practical knowledge and use of AED devices during cardiac arrest.",
    videoUrl: "https://www.youtube.com/embed/_JnS4pH9MGA",
  },
];

const CourseDetail = () => {
  const { courseId } = useParams();
  const [completed, setCompleted] = useState(false);

  const course = JSON.parse(localStorage.getItem("currentCourse"));

  const handleComplete = () => {
    localStorage.setItem(`course-${courseId}-completed`, "true");
    setCompleted(true);
  };

  useEffect(() => {
    const done = localStorage.getItem(`course-${courseId}-completed`);
    if (done === "true") setCompleted(true);
  }, [courseId]);

  if (!course) {
    return <div className="p-6 text-center">Course not found.</div>;
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-red-600 mb-2">{course.title}</h2>
        <p className="text-gray-700 mb-4">{course.description}</p>

        <div className="aspect-video mb-6">
          <iframe
            className="w-full h-full rounded-md"
            src={course.videoUrl}
            title={course.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {!completed ? (
          <button
            onClick={handleComplete}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Mark as Completed
          </button>
        ) : (
          <div className="mt-4">
            <p className="text-green-700 font-semibold mb-2">✅ Course Completed!</p>
            <a
              href="/certificate-template.pdf"
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Download Certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
