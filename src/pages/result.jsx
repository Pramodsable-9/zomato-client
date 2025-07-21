import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Results() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { city, category } = useParams(); // Get city and category from URL params
console.log(" city, category -->>>", city, category );
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  // Fetch restaurants based on city or category
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        let url = "";

        if (city) {
          // Fetch restaurants by city
          url = `http://localhost:5400/getRestaurantsByCity/${city}`;
        } else if (category) {
          // Fetch restaurants by category
          url = `http://localhost:5400/getRestaurantsByCategory/${category}`;
        }

        if (url) {
          const response = await axios.get(url);
          console.log("Response data:", response.data);
          setRestaurants(response.data.restaurantList || []); // Assuming the list is under restaurantList
        }
      } catch (err) {
        setError("Failed to fetch restaurants.");
      }
    };

    if (city || category) {
      fetchRestaurants();
    }
  }, [city, category]);

  return (
    <div>
      <h1>
        Restaurants in {city ? city : category ? category : "Our Collection"}
      </h1>

      {error && <p className="error">{error}</p>}

      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <Link to={`/restaurant/${restaurant.id}`} className="restaurant-link">
                <img
                  src={restaurant.image || "/default-restaurant.jpg"} // Default image if not provided
                  alt={restaurant.restaurant}
                  className="restaurant-image"
                />
                <div className="restaurant-details">
                  <h2>{restaurant.restaurant}</h2>
                  <p>📍 {restaurant.city}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
}

export default Results;
