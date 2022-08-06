import http from "../http-common";
import AuthService from "./AuthService";

const token = AuthService.getAuthToken();


export default class UserService {

    static async createCustomer(data){
        return await http.post("/user/customers" , data, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        })
    }

    static async deleteCustomer(id){
        return await http.delete("/user/customers/"+id , {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        })
    }

    static async createTransaction(data , customerID){
        return await http.post("/user/customers/"+ customerID+"/transactions" , data, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        })
    }

    static async getAllTransactions(customerID){
        return await http.get(`/user/customers/${customerID}/transactions/` , 
            {headers: {'Authorization' : `Bearer ${token}`}});
    }

    static async getOneTransaction(customerID , transactionId){
        return await (await http.get(`/user/customers/${customerID}/transactions/${transactionId}` , 
            {headers: {'Authorization' : `Bearer ${token}`}})).data;
    }

    static async getTransactionArticles(customerID , transactionId){
        return await http.get(`/user/customers/${customerID}/transactions/${transactionId}/articles` , 
            {headers: {'Authorization' : `Bearer ${token}`}});
    }

    static async getAllCustomers(){
        return await http.get("/user/customers" , {headers: {
            'Authorization' : `Bearer ${token}`
        }} )
    }

    static async getUserInfo(){
        return await (await http.get("/user" , {headers: { 'Authorization' : `Bearer ${token}`}})).data
    }

    static async getCustomerInfo(customerId){
        return await (await http.get("/user/customers/"+customerId , {headers: { 'Authorization' : `Bearer ${token}`}})).data
    }


    static async updateUserProfil(data){
       return await (await http.put("/user/profile" ,data, {headers: { 'Authorization' : `Bearer ${token}`}})).data
    }

    
}