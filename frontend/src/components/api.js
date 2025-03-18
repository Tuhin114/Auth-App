export const signUpApiCall = async (formData) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return response.json();
};

export const signInApiCall = async (formData) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return response.json();
};

export const logOutCall = async () => {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
};
