import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import RestaurantsByCity from "./pages/RestaurantByCity";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Results from "./pages/result";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route
            path="/getRestaurantsByCity/:city"
            element={<RestaurantsByCity />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/restaurants/city/:city" element={<Results />} />
          <Route path="/restaurants/category/:category" element={<Results />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </Router>
  );
  
};

export default App;
