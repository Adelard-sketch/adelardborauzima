import api from './api';
import { BlogPost } from '@/types/blog';

export const blogService = {
  getAllPosts: async () => {
    const response = await api.get<BlogPost[]>('/blog');
    return response.data;
  },

  getPostBySlug: async (slug: string) => {
    const response = await api.get<BlogPost>(`/blog/${slug}`);
    return response.data;
  },

  getFeaturedPosts: async () => {
    const response = await api.get<BlogPost[]>('/blog/featured');
    return response.data;
  },

  createPost: async (post: Partial<BlogPost>) => {
    const response = await api.post<BlogPost>('/blog', post);
    return response.data;
  },

  updatePost: async (id: string, post: Partial<BlogPost>) => {
    const response = await api.put<BlogPost>(`/blog/${id}`, post);
    return response.data;
  },

  deletePost: async (id: string) => {
    await api.delete(`/blog/${id}`);
  },
};
