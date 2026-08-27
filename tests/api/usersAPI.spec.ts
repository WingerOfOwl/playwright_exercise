import {test, expect} from '@playwright/test';
import { UsersApi2  } from "../../api/usersApi2";


test.describe('Ini mencoba API menggunakan POM', () => {
    let usersAPI2: UsersApi2

    test.beforeEach(async ({ request }) => {
        usersAPI2 = new UsersApi2(request);
    });

    test('Get status - berhasil mengambil semua user yang ada pada database', async () => {
        const response = await usersAPI2.getAllUsers();

        expect(response.status()).toBe(200)
        const data = await response.json()
        expect(Array.isArray(data)).toBe(true)
        expect(data.length).toBeGreaterThan(0)
        expect(data[0]).toHaveProperty('name')
        expect(data[0]).toHaveProperty('email')
    });

    test('Mengambil Id yang ada pada database', async () =>{
        const response = await usersAPI2.getUserById(1);

        expect(response.status()).toBe(200)
        const data = await response.json();
        expect(data.id)
        expect(data.name).toBe('Leanne Graham')
        expect(data.email).toBe('Sincere@april.biz')
    });

    test('GET - /users/9999 - user tidak ditemukan', async () =>{
        const response = await usersAPI2.getUserById(9999)
        expect(response.status()).toBe(404)
    
    })
    test('POST - Mengirimkan data user baru', async () =>{
        const userdata = {
                name: 'Jiddan Testing 1',
                username: 'Wing',
                email: 'userdata@gmail.com'

        };

        const response = await usersAPI2.createUser(userdata);
        expect(response.status()).toBe(201)
        const data = await response.json();
        expect(data).toMatchObject(userdata);
        expect(data).toHaveProperty('id');

    });

    test('DELETE - Mengubah data secara keseluruhan', async () =>{
        const response = await usersAPI2.deleteUser(1)

        expect(response.status()).toBe(200)
    });

    test('POST - Mengirimkan data ke API (Create)', async () =>{
        const userdata = {
            name: 'user',
            username: 'nafi',
            email: "nafinafinafi@gmail.com"
        }
        const response = await usersAPI2.createUser(userdata)
        expect(response.status()).toBe(201)
        const data = await response.json()
        expect(data).toHaveProperty('name')
        expect(data).toHaveProperty('username')
        expect(data).toHaveProperty('email')
        expect(data).toHaveProperty('id')
        expect(data.name).toBe('user')
        expect(data.username).toBe('nafi')
        expect(data.email).toBe('nafinafinafi@gmail.com')
    })


});