import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import HomePage from "./Compoenets/HomePage/HomePage";
import Footer from "./Compoenets/Footer/Footer";
import Navbar from "./Compoenets/Navbar/Navbar";
import Login from "./Compoenets/Auth/Login";
import Register from "./Compoenets/Auth/Register";
import Forgot from "./Compoenets/Auth/Forgot";
import ChangePassword from "./Compoenets/Auth/ChangePassword";
import Dashboard from "./Compoenets/Dashboard/Dashboard";
import PostRequirement from "./Compoenets/Requirement/PostRequirement";
import AllRequirements from "./Compoenets/Requirement/AllRequirements";
import ResumeCheck from "./Compoenets/Resume/ResumeCheck";
import ProfilePage from "./Compoenets/Profile/ProfilePage";
import Wallet from "./Compoenets/Wallet/Wallet";
import BuyCoins from "./Compoenets/Wallet/BuyCoins";
import Posts from "./Compoenets/Post/Posts";
import EditProfile from "./Compoenets/Profile/ProfileEdit/EditProfile";
import AddEditExperience from "./Compoenets/Profile/ProfileEdit/Experience/AddEditExperience";
import AddEditSkill from "./Compoenets/Profile/ProfileEdit/Skills/AddEditSkill";
import AddCertificate from "./Compoenets/Profile/ProfileEdit/Certificate/AddCertificate";
import OverseasEducation from "./Compoenets/OverseasEducation/OverseasEducation";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ServiceProvider from "./Compoenets/ServiceProvider/ServiceProvider";
import UserProfile from "./Compoenets/Profile/UserProfile/UserProfile";
import FullUserProfile from "./Compoenets/Profile/UserProfile/FullUserProfile";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <div className="App flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </header>
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 5000,
              style: {
                background: 'white',
                color: 'black',
              },
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
          <main className="flex-grow  ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/post-requiremnt" element={<PostRequirement />} />
              <Route path="/overseas-education" element={<OverseasEducation />} />
              <Route path="/resume-check" element={<ResumeCheck />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/user-profile" element={<FullUserProfile />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/edit-skills" element={<AddEditSkill />} />
              <Route path="/add-edit-certificate" element={<AddCertificate />} />
              <Route path="/add-edit-experience" element={<AddEditExperience />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/buy-coins" element={<BuyCoins />} />
              <Route path="/my-posts" element={<Posts />} />
              <Route path="/all-requirements" element={<AllRequirements />} />
              <Route path="/service-provider" element={<ServiceProvider />} />
              <Route path="/forgot-password" element={<Forgot />} />
              <Route path="/reset-password/:token" element={<ChangePassword />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
