// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Restaurants = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5400/restaurants")
//       .then((response) => {
//         console.log("API Response:", response.data); // Debugging
//         if (Array.isArray(response.data)) {
//           setRestaurants(response.data);
//         } else {
//           console.error("Unexpected API response:", response.data);
//           setRestaurants([]); // Fallback to an empty array
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Restaurants List</h2>
//       <ul>
//         {Array.isArray(restaurants) && restaurants.length > 0 ? (
//           restaurants.map((restaurant) => (
//             // <li key={restaurant.id}>
//             //   <strong>{restaurant.restaurant}</strong> - {restaurant.city}
//             // </li>
//             <li key={restaurant.id}>
//               <strong>
//                 <a href={`/restaurants/${restaurant.id}`}>{restaurant.restaurant}</a>
//               </strong> - {restaurant.city}
//               <p>
//                 <a href={`/getRestaurantsByCity/${restaurant.city}`}>
//                   See more restaurants in {restaurant.city}
//                 </a>
//               </p>

//             </li>

            
//           ))
//         ) : (
//           <p>No restaurants available.</p>
//         )}
//       </ul>

      
//     </div>
//   );
// };

// export default Restaurants;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5400/restaurants")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          setRestaurants(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setRestaurants([]); // Fallback to an empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Restaurants List</h2>
      <ul>
        {Array.isArray(restaurants) && restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            // <li key={restaurant.id}>
            //   <strong>{restaurant.restaurant}</strong> - {restaurant.city}
            // </li>
            <li key={restaurant.id}>
              <strong>
                <a href={`/restaurants/${restaurant.id}`}>{restaurant.restaurant}</a>
              </strong> - {restaurant.city}

              <p>
                <a href={`/getRestaurantsByCity/${restaurant.city}`}>
                  See more restaurants in {restaurant.city}
                </a>
              </p>

            </li>

            
          ))
        ) : (
          <p>No restaurants available.</p>
        )}
      </ul>

      
    </div>
  );
};

export default Restaurants;

