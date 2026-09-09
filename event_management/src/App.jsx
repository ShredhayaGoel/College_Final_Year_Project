import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Home from "./components/Home";
import Header from "./components/header";
import Login from "./pages/Login";
import Contact from "./components/Contact";
import UpcomingEvent from "./components/upcomingEvents/UpcomingEvent";

import EventDetails from "./pages/eventdetails";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/Forgotpassword";
import NewPassword from "./pages/Newpassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Dashboard />
                <Home />
                <UpcomingEvent />
                <Contact />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />

          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
