import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: LucideIcon;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}