import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    return res.status(201).json({ message: "User registered successfully!" });
});

const loginUser = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: "Login successful" });
});

const logoutUser = asyncHandler(async (req, res) => {
    // Logic to clear cookies/refresh token
    return res.status(200).json({ message: "Logged out" });
});

export { 
    registerUser, 
    loginUser,
    logoutUser
};