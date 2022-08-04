import httpCommon from "@/http-common"

export default class ProductService {

    static  getProduit() {
        return  fetch("http://localhost:8080/products.json");
    }
}