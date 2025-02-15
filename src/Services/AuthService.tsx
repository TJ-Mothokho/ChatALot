import api from "./API";

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post("/Auth/Login", { username, password });
    localStorage.setItem("accessToken", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");

    if (!refreshToken) throw new Error("No refresh token available");

    const response = await api.post("/Auth/RefreshToken", {
      token: accessToken,
      refreshToken: refreshToken,
    });

    localStorage.setItem("accessToken", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    return response.data.token;
  } catch (error) {
    console.error("Token refresh failed:", error);
    logout();
    return null;
  }
};

export const logout = () => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    api
      .post("/Auth/Logout", { token })
      .catch((err) => console.error("Logout failed:", err));
  }

  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login"; // Redirect to login page
};
