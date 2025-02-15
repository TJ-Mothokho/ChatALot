import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a single slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || "", // Load accessToken from localStorage
    userID: localStorage.getItem("userID") || "",
    username: localStorage.getItem("username") || "",
    role: localStorage.getItem("role") || "",
    profilePicture: localStorage.getItem("profilePicture") || "",
    refreshToken: localStorage.getItem("refresh") || "",
    email: localStorage.getItem("email") || "",
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload); // Save accessToken to localStorage
    },
    clearAccessToken: (state) => {
      state.accessToken = "";
      localStorage.removeItem("accessToken"); // Remove accessToken from localStorage
    },
    setUserID: (state, action) => {
      state.userID = action.payload;
      localStorage.setItem("userID", action.payload); // Save userID to localStorage
    },
    clearUserID: (state) => {
      state.userID = "";
      localStorage.removeItem("userID"); // Remove userID from localStorage
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload); // Save username to localStorage
    },
    clearUsername: (state) => {
      state.username = "";
      localStorage.removeItem("username"); // Remove username from localStorage
    },
    setRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem("role", action.payload); // Save role to localStorage
    },
    clearRole: (state) => {
      state.role = "";
      localStorage.removeItem("role"); // Remove role from localStorage
    },
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
      localStorage.setItem("profilePicture", action.payload); // Save profilepicture to localStorage
    },
    clearProfilePicture: (state) => {
      state.profilePicture = "";
      localStorage.removeItem("profilePicture"); // Remove profilepicture from localStorage
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      localStorage.setItem("refreshToken", action.payload); // Save refreshToken to localStorage
    },
    clearRefreshToken: (state) => {
      state.refreshToken = "";
      localStorage.removeItem("refreshToken"); // Remove refreshToken from localStorage
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("email", action.payload); // Save email to localStorage
    },
    clearEmail: (state) => {
      state.email = "";
      localStorage.removeItem("email"); // Remove email from localStorage
    },
  },
});

// Export the actions
export const {
  setAccessToken,
  clearAccessToken,
  setUserID,
  clearUserID,
  setUsername,
  clearUsername,
  setRole,
  clearRole,
  setProfilePicture,
  clearProfilePicture,
  setEmail,
  clearEmail,
  setRefreshToken,
  clearRefreshToken,
} = authSlice.actions;

// Create and export the store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
