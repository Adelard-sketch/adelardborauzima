import api from './api';
import { Project } from '@/types/project';

export const projectService = {
  getAllProjects: async () => {
    const response = await api.get<Project[]>('/projects');
    return response.data;
  },

  getProjectBySlug: async (slug: string) => {
    const response = await api.get<Project>(`/projects/${slug}`);
    return response.data;
  },

  getFeaturedProjects: async () => {
    const response = await api.get<Project[]>('/projects/featured');
    return response.data;
  },

  createProject: async (project: Partial<Project>) => {
    const response = await api.post<Project>('/projects', project);
    return response.data;
  },

  updateProject: async (id: string, project: Partial<Project>) => {
    const response = await api.put<Project>(`/projects/${id}`, project);
    return response.data;
  },

  deleteProject: async (id: string) => {
    await api.delete(`/projects/${id}`);
  },
};
