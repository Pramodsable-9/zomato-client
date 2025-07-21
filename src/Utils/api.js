import axios from "axios";

const API_BASE_URL = "http://localhost:5400";

// Fetch all restaurants
export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/restaurants`);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }
};

// Fetch restaurant details
export const fetchRestaurantDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/restaurants/${id}`);
    return response.data.restaurant;
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    return null;
  }
};

// Fetch restaurants by city
export const fetchRestaurantsByCity = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getRestaurantsByCity/${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants in city:", error);
    return [];
  }
};

// User Signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    return { error: "Signup failed" };
  }
};

// User Login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    return { error: "Login failed" };
  }
};
