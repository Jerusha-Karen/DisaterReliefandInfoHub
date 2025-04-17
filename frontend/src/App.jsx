import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Donation from './components/Donation'
import Volunteer from './components/Volunteer';
import DonateBlood from './components/DonateBlood';
import TrainingCert from './components/Training/TrainingCert'
import TrainingCourses from './components/Training/TrainingCourses';
import CourseDetail from './components/Training/CourseDetail';

function App() {
  
  return (
    <Router>
      <Navbar /> {}
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donation />} /> {}
        <Route path="/volunteer" element={<Volunteer />} /> {}
        <Route path="/donateblood" element={<DonateBlood />} /> {}
        <Route path="/train" element={<TrainingCert />} /> {}
        <Route path="/train/courses" element={<TrainingCourses />} />
        <Route path="/train/courses/:courseId" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
