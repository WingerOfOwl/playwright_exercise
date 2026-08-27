import { baseApi } from './baseApi';
import { APIRequestContext, expect } from '@playwright/test';

export class UsersApi extends baseApi {
    constructor(request: APIRequestContext) {
        super(request);
    }

    // GET /users - ambil semua user
    async getAllUsers() {
        const response = await this.get('/users');
        return response;
    }

    // GET /users/{id} - ambil satu user
    async getUserById(id: number) {
        const response = await this.get(`/users/${id}`);
        return response;
    }

    // POST /users - buat user baru
    async createUser(userData: object) {
        const response = await this.post('/users', userData);
        return response;
    }

    // DELETE /users/{id} - hapus user
    async deleteUser(id: number) {
        const response = await this.delete(`/users/${id}`);
        return response;
    }

    // Validasi helper - cek response 200 dan validasi data
    async validateUserData(response: any, expectedData: Record<string, unknown>) {
        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data).toMatchObject(expectedData);
        return data;
    }
}
