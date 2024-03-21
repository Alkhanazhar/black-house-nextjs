import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || "")
        console.log("Connect to MongoDB");


    } catch (error) {
        console.log(error);
    }
}