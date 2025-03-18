export const signUpApiCall = async (formData) => {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Signup failed");
    }

    return data;
  } catch (error) {
    console.error("Signup API error:", error);
    return { error: error.message || "Something went wrong" };
  }
};

export const signInApiCall = async (formData) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login API error:", error);
    return { error: error.message || "Something went wrong" };
  }
};

export const logOutCall = async () => {
  try {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Logout failed");
    }

    return data;
  } catch (error) {
    console.error("Logout API error:", error);
    return { error: error.message || "Something went wrong" };
  }
};
