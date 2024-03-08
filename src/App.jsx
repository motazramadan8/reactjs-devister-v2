import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Friends from "./pages/friends/Friends";
import Jobs from "./pages/jobs/Jobs";
import RemoteJobsPage from "./pages/jobs/RemoteJobsPage";
import FullTimeJobsPage from "./pages/jobs/FullTimePage";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/remote" element={<RemoteJobsPage />} />
          <Route path="/jobs/full-time" element={<FullTimeJobsPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
