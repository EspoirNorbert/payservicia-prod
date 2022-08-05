import httpCommon from "@/http-common"

export default class ProductService {

    static  getProduit() {
        return  fetch( `${window.location.origin}/products.json`);
    }
}