import { test, expect } from '@playwright/test';
import { UsersApi } from '../../api/usersApi';
import { validateUserSchema } from '../../api/schemaValidator';

test.describe('API Testing Users - POM', () => {
    let usersApi: UsersApi;

    test.beforeEach(async ({ request }) => {
        usersApi = new UsersApi(request);
    });

    test('GET /users - berhasil ambil semua user', async () => {
        const response = await usersApi.getAllUsers();

        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);

        // Validasi schema: setiap user di list harus sesuai struktur user schema
        for (const user of data) {
            const { valid, errors } = validateUserSchema(user);
            expect(valid, JSON.stringify(errors)).toBe(true);
        }
    });

    test('GET /users/1 - ambil user by id', async () => {
        const response = await usersApi.getUserById(1);

        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data.id).toBe(1);
        expect(data.name).toBe('Leanne Graham');
        expect(data.email).toBe('Sincere@april.biz');

        // Validasi schema response single user
        const { valid, errors } = validateUserSchema(data);
        expect(valid, JSON.stringify(errors)).toBe(true);
    });

    test('GET /users/9999 - user tidak ditemukan', async () => {
        const response = await usersApi.getUserById(9999);

        expect(response.status()).toBe(404);
    });

    test('POST /users - berhasil buat user baru', async () => {
        const newUser = {
            name: 'Jidan Testing',
            username: 'jidan',
            email: 'jidan@example.com',
        };

        const response = await usersApi.createUser(newUser);

        expect(response.status()).toBe(201);
        const data = await response.json();
        expect(data).toMatchObject(newUser);
        expect(data).toHaveProperty('id');
    });

    test('DELETE /users/1 - berhasil hapus user', async () => {
        const response = await usersApi.deleteUser(1);
        expect(response.status()).toBe(200);
    });
});
