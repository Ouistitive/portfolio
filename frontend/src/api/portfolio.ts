import { fetchList } from "./client";
import type {
	ApiExperience,
	ApiHobby,
	ApiLearning,
	ApiProject,
	ApiSchool,
	ApiSkill,
} from "./types";

export const getProjects = () => fetchList<ApiProject>("projects");
export const getExperiences = () => fetchList<ApiExperience>("experiences");
export const getSkills = () => fetchList<ApiSkill>("skills");
export const getSchools = () => fetchList<ApiSchool>("schools");
export const getHobbies = () => fetchList<ApiHobby>("hobbies");
export const getLearnings = () => fetchList<ApiLearning>("learnings");
