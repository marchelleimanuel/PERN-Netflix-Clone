import axios from "axios";
import { BASE_URL, REFRESH_ACCESS_TOKEN_URL } from "./urlPath";
import { getUserInfo } from "./common";
import { logOut } from "../services/Home/homeService";

const userLoggedIn = getUserInfo();

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, 
});

// --- Response Interceptor ---
api.interceptors.response.use(
    (response) => {
        // Response dari endpoint yang kita hit  
        // Kalau ga ada error atau status === 200 akan mengembalikan response 
        // kaya 'THEN'
        return response;
    },
    async (error) => {
        // ini reponse dari endpoint yang kita hit juga 
        // TAPI kalau ERROR saja... atau statusnya === 401 
        // kaya 'CATCH'
        const originalRequest = error.config;

        // supaya ga rekursif atau infinite loop waktu mau Refresh Access Token
        if (originalRequest.url.includes(REFRESH_ACCESS_TOKEN_URL)) {
            console.log("Skipping interceptor for refresh endpoint");
            
            // ini .reject digunain supaya nanti after return errornya, mastiin nextnya langsung masuk ke Catch block
            return Promise.reject(error); 
        }

        // 🧠 Case 2: if access token expired (401) 
        if (error.response?.status === 401) {
            try {
                // mau refresh Access Token
                await api.post(REFRESH_ACCESS_TOKEN_URL);
                return api(originalRequest);
            } catch (refreshError) {
                console.log("❌ Refresh token invalid, please login again");
                await logOut(userLoggedIn);

                // ini .reject digunain supaya nanti after return errornya, mastiin nextnya langsung masuk ke Catch block
                return Promise.reject(refreshError);
            }
        }
        
        // ini .reject digunain supaya nanti after return errornya, mastiin nextnya langsung masuk ke Catch block
        return Promise.reject(error);
    }
);

export default api;
