import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Preferences from "./Preferences";

const UserAccount = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route path="/Preferences" element={<Preferences />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default UserAccount;
