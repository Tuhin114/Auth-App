import mongoose from "mongoose";

// Define the User schema with various fields and their data types
const userSchema = new mongoose.Schema(
  {
    // The unique username of the user
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    // The password of the user (min length: 6)
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    // The email of the user (unique)
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Create the User model based on the userSchema
const User = mongoose.model("User", userSchema);

// Export the User model
export default User;
