import { generateTokenAndSetCookie } from "../utils/generateToken.js";
import User from "../Model/User.js";
import bcrypt from "bcryptjs";

// Controller function for user signup
export const signup = async (req, res) => {
  try {
    const { username, email, password, fullName } = req.body; // Destructuring user input

    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Checking if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    // Checking if email is already taken
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email is already taken" });
    }

    // Validating password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    // Generating salt and hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating a new user instance
    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    // Saving the new user to the database
    await newUser.save();

    // Generating JWT token and setting it as a cookie
    generateTokenAndSetCookie(newUser._id, res);

    // Sending success response with user data
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      email: newUser.email,
    });
  } catch (error) {
    // Handling errors
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function for user login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body; // Destructuring user input

    // Finding the user by username
    const user = await User.findOne({ username });

    // Comparing passwords using bcrypt
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    // If user or password is incorrect, return error
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Generating JWT token and setting it as a cookie
    generateTokenAndSetCookie(user._id, res);

    // Sending success response with user data
    res.status(200).json({
      message: "Logged in successfully",
    });
  } catch (error) {
    // Handling errors
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function for user logout
export const logout = async (req, res) => {
  try {
    // Clearing JWT cookie
    res.cookie("jwt", "", { maxAge: 0 });
    // Sending success response
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    // Handling errors
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
