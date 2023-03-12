import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:5000" });

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    config.headers = {
        "Authorization": token,
    };
    return config;
});
