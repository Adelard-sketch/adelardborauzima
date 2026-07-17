export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  category: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
  year: number;
  role: string;
  impact?: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  slug: string;
}
