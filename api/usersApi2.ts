import { APIRequestContext } from "playwright";
import { baseApi2 } from "./baseapi2";
import { expect } from "playwright/test";


export class UsersApi2 extends baseApi2 {
    constructor(request: APIRequestContext){
        super(request);
    }

    async getAllUsers(){
        const response = await this.get('/users');
    return response;
    }

    async getUserById(id: number){
        const response = await this.get(`/users/${id}`);
        return response;

    }

    async createUser(userData:object){
        const response =  await this.post(`/users`, userData);
        return response
    }

    async deleteUser(id: number){
        const response = await this.delete(`/users/${id}`)
        return response
    }

    

    async validateUserData(response: any, expectedData:Record<string, unknown>){
        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data).toMatchObject(expectedData);
        return data;
    }

}