export interface BilingualField {
	en: string;
	fr: string;
}

export interface ApiProject {
	id: string;
	title: BilingualField;
	description: BilingualField;
	tags: string[];
	githubLink?: string;
	previewImage?: string;
	order: number;
	createdAt: string;
}

export interface ApiExperience {
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

export interface ApiSkill {
	id: string;
	name: BilingualField;
	description: BilingualField;
	category: string;
	tags: string[];
	order: number;
	createdAt: string;
}

export interface ApiSchool {
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

export interface ApiHobby {
	id: string;
	title: BilingualField;
	description: BilingualField;
	tags: string[];
	order: number;
	createdAt: string;
}

export interface ApiLearning {
	id: string;
	name: BilingualField;
	description: BilingualField;
	tags: string[];
	order: number;
	createdAt: string;
}
