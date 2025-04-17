// TrainingCert.jsx
import React, { useState } from "react";
import TrainingCertHero from "./TrainingCertHero";
import TrainingCourseList from "./TrainingCourseList";

const TrainingCert = () => {
  const [showCourses, setShowCourses] = useState(false);

  const handleExploreClick = () => {
    setShowCourses(true);
  };

  return (
    <div>
      <TrainingCertHero onExploreClick={handleExploreClick} />
      {showCourses && <TrainingCourseList />}
    </div>
  );
};

export default TrainingCert;
