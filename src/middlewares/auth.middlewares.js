import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asynchandler";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model";


export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorisation")?.replace("Bearer ", "")
        if(!token) {
            throw new ApiError(401, "Uauthorised Eror")
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        if(!user){
            throw new ApiError(401, "Invalid user token")
        }
        req.user =user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})