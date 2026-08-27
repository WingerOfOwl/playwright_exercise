import { errors } from "playwright";

export interface LoginData2{
    username: string;
    password: string;
    expectedError?: string;

}

export const users: LoginData2[] = [
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

]