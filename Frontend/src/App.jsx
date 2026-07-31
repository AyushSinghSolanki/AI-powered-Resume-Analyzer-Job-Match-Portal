import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resumepage from "./components/Resumepage";
import Jobportal from "./components/Jobprotal";
import Resources from "./components/Resouces";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-ai" element={<Resumepage />} />
        <Route path="/job-match" element={<Jobportal />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
