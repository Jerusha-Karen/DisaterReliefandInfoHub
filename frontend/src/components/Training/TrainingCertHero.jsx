import { useNavigate } from "react-router-dom";

const TrainingCertHero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
      style={{
        backgroundImage: `url('/train.jpeg')`,
      }}
    >
      <div className="backdrop-blur-md bg-white/40 p-10 rounded-2xl shadow-xl text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-red-700 mb-4">Learn to Save Lives</h1>
        <p className="text-lg text-gray-800 mb-6">
          Join our certified courses on First Aid, CPR, and Emergency Medical Relief.
        </p>
        <button
          onClick={() => navigate("/train/courses")}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
    
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default TrainingCertHero;
