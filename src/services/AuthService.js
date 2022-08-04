import http from "../http-common";

export default class AuthService {

    static async signup(data){
        return await http.post("/auth/signup", data);
    }

    static async login(data){
       return await http.post("/auth/login",data);
    }
    
    static async saveToken(token){
        await window.localStorage.setItem("token" , token);
    }

    static isAuth() {
        if (window.localStorage.getItem("token") == null){
            return false;
        }
        return true;
    }

    static getAuthToken() {
       if (window.localStorage.getItem("token") != null){
           return window.localStorage.getItem("token");
       }
    }

    static async logout() {
        await window.localStorage.clear();
    }


}