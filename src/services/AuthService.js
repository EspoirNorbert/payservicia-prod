import http from "../http-common";

export default class AuthService {

    static async signup(data){
        return await http.post("/auth/signup", data);
    }

    static async login(data){
       return await http.post("/auth/login",data);
    }
    
    static saveToken(token){
        window.localStorage.setItem("token" , token);
    }

    static getAuth() {
        if (window.localStorage.getItem(token) != null){
            return true;
        }
        return false;
    }

    static getAuthToken() {
       if (window.localStorage.getItem("token") != null){
           return window.localStorage.getItem("token");
       }
    }
}