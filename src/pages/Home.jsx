import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Home.css";
import RestaurantsByCity from "./RestaurantByCity";
import axios from "axios";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchCity && !selectedCity) {
      setError("Please select or enter a city");
      return;
    }

    setLoading(true);
    setError(null);
    const city = searchCity || selectedCity; // Use either the entered city or selected city

    try {
      const response = await axios.get(`http://localhost:5400/getRestaurantsByCity/${city}`);
      console.log("response-->>>>",response);
      setRestaurants(response.data); // Assuming the response contains the list of restaurants
      // Navigate to the results page with the city as a query parameter
      navigate(`/restaurants/city/${city}`);
    } catch (err) {
      setError("Failed to fetch restaurants.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="home-container">
      {/* Hero Section */}

      <div className="hero-section">
        <h1>Find the best restaurants, cafés, and bars</h1>
        <form onSubmit={handleSearch} className="search-form">
        <RestaurantsByCity/>
          <input
            type="text"
            placeholder="Enter city name..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Explore Categories */}
      <div className="explore-section">
        <h2>Explore Restaurants by Category</h2>
        <div className="category-list">
          <Link to="/restaurants/category/Fast-Food">🍕 Fast Food</Link>
          <Link to="/restaurants/category/Healthy-Food">🥗 Healthy Food</Link>
          <Link to="/restaurants/category/Asian-Cuisine">🍜 Asian Cuisine</Link>
          <Link to="/restaurants/category/Burgers">🍔 Burgers & More</Link>
        </div>
      </div>

      {/* Featured Restaurants */}
      <div className="featured-section">
        <h2>Top Featured Restaurants</h2>
        <div className="featured-list">
          <div className="featured-item">
            <img src="https://d4t7t8y8xqo0t.cloudfront.net/admin/eazymedia/trends/4268/17041028840.jpg" alt="Restaurant 1" />
            <p>🍽️ The Grand Feast, Delhi</p>
          </div>
          <div className="featured-item">
            <img src="https://sinfullyspicy.com/wp-content/uploads/2022/02/Tandoori-Mushroom-Pizza-Featured-Image.jpg" alt="Restaurant 2" />
            <p>🍕 Pizza Paradise, Mumbai</p>
          </div>
          <div className="featured-item">
            <img src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg" alt="Restaurant 3" />
            <p>🍣 Sushi Delight, Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
