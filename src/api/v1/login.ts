import axios from 'axios';
import { User } from '@/models/user';

// Use the GET on /login to check if a user is logged in here. See
// https://docs.codegra.de/api#get-/api/v1/login
export async function checkLogin(): Promise<User> {
    return (0 as any);
}

export async function byUsername(username: string, password: string): Promise<User> {
    const res = await axios.post(`/api/v1/login`, { username, password });
    const accessToken = res.data.access_token;
    // NOTE: How can we refactor this?
    localStorage.setItem('authToken', accessToken);
    return new User(res.data.user.name);
}
