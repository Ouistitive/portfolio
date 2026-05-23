export interface BilingualField {
  en: string;
  fr: string;
}

export interface Project {
  id: string;
  title: BilingualField;
  description: BilingualField;
  tags: string[];
  githubLink?: string;
  previewImage?: string;
  order: number;
  createdAt: string;
}

export interface Experience {
  id: string;
  title: BilingualField;
  company: BilingualField;
  description: BilingualField;
  from: BilingualField;
  to: BilingualField;
  tags: string[];
  logo?: string;
  order: number;
  createdAt: string;
}

export interface Skill {
  id: string;
  name: BilingualField;
  description: BilingualField;
  category: string;
  tags: string[];
  order: number;
  createdAt: string;
}

export interface School {
  id: string;
  title: BilingualField;
  school: BilingualField;
  description: BilingualField;
  from: BilingualField;
  to: BilingualField;
  tags: string[];
  logo?: string;
  order: number;
  createdAt: string;
}

export interface Hobby {
  id: string;
  title: BilingualField;
  description: BilingualField;
  tags: string[];
  order: number;
  createdAt: string;
}

export interface Learning {
  id: string;
  name: BilingualField;
  description: BilingualField;
  tags: string[];
  order: number;
  createdAt: string;
}
