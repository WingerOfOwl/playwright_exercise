// ============================================
// DATA DRIVEN - data dalam bentuk TypeScript
// Setiap object = 1 skenario test
// ============================================
export interface LoginData {
  username: string;
  password: string;
  // Pesan error yang diharapkan (kosong = test harus berhasil)
  expectedError?: string;
}

export const users: LoginData[] = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    expectedError: 'Epic sadface: Sorry, this user has been locked out.',
  },
  {
    username: 'problem_user',
    password: 'secret_sauce',
  },
  {
    username: 'performance_glitch_user',
    password: 'secret_sauce',
  },
];
