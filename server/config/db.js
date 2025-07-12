import mongoose from "mongoose";

// Function to Connect MongoDB Database

const connectDb = async () => {
    mongoose.connection.on('connected', () => console.log("DB Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDb;