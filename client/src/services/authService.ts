import api from './api';
import { User, LoginCredentials } from '@/types/user';

export const authService = {
  login: async (credentials: LoginCredentials) => {
    const response = await api.post<{ user: User; token: string }>('/auth/login', credentials);
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get<User>('/auth/me');
    return response.data;
  },

  logout: async () => {
    await api.post('/auth/logout');
  },
};
