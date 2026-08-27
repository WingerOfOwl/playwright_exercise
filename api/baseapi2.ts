
import { APIRequestContext } from "playwright";


export class baseApi2{
    readonly request: APIRequestContext;
    readonly baseURL: string;

    constructor(request: APIRequestContext){
        this.request= request;
        this.baseURL= "https://jsonplaceholder.typicode.com";
    }

    async get(path: string) {
        return this.request.get(`${this.baseURL}${path}`);
    };

    async post(path: string, data?:object){
        return this.request.post(`${this.baseURL}${path}`, {data});

    }

    async put(path: string, data?:object){
        return this.request.post(`${this.baseURL}${path}`, {data});
    }
    
    async patch(path: string, data?:object){
        return this.request.patch(`${this.baseURL}${path}`, {data});
    }

    async delete(path:string, data?:object){
        return this.request.delete(`${this.baseURL}${path}`, {data});
    }
}