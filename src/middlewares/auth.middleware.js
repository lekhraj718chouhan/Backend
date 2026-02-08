import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"; // Check if it's ApiError or ApiResponse
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js"; // Added curly braces

export const verifyJWT = asyncHandler(async (req, res, next) => {
   try {
     const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
 
     if (!token) {
         return res.status(401).json({ message: "Access token missing" });
     }
 
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
 
     if (!user) {
         throw new ApiError(401, "Invalid Access token");
     }
     
     req.user = user;
     next();
   } catch (error) {
     throw new ApiError(401, error?.message || "Invalid access token");
   }
});