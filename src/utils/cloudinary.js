import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration - Ensure these match your .env keys exactly
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => { 
    try {
        if (!localFilePath) return null;

        // Upload to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        
        // Remove local file after successful upload
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        
        return response;

    } catch (error) {
        // CHECK YOUR TERMINAL FOR THIS LOG
        console.error("CLOUDINARY ERROR:", error.message);
        
        // Clean up local temp file even if upload fails
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }   
};

export { uploadOnCloudinary };