import express from "express";
const router = express.Router();

// Define a GET route for the signup endpoint
router.get("/signup", (req, res) => {
  // Return a JSON response indicating that the signup endpoint was hit
  res.json({
    data: "You hit signup endpoint",
  });
});

// Define a GET route for the login endpoint
router.get("/login", (req, res) => {
  // Return a JSON response indicating that the login endpoint was hit
  res.json({
    data: "You hit login endpoint",
  });
});

// Define a GET route for the logout endpoint
router.get("/logout", (req, res) => {
  // Return a JSON response indicating that the logout endpoint was hit
  res.json({
    data: "You hit logout endpoint",
  });
});

// Export the router instance as the default export
export default router;
