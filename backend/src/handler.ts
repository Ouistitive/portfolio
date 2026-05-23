import type { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import { ok, notFound } from "./lib/response";
import {
  listProjects,
  getProject,
} from "./routes/projects";
import {
  listExperiences,
  getExperience,
} from "./routes/experiences";
import { listSkills, getSkill } from "./routes/skills";
import { listSchools, getSchool } from "./routes/schools";
import { listHobbies, getHobby } from "./routes/hobbies";
import { listLearnings, getLearning } from "./routes/learnings";

interface Route {
  pattern: RegExp;
  handler: (match: RegExpMatchArray) => Promise<APIGatewayProxyStructuredResultV2>;
}

const routes: Route[] = [
  { pattern: /^GET \/projects\/(.+)$/, handler: ([, id]) => getProject(id) },
  { pattern: /^GET \/projects$/, handler: () => listProjects() },
  { pattern: /^GET \/experiences\/(.+)$/, handler: ([, id]) => getExperience(id) },
  { pattern: /^GET \/experiences$/, handler: () => listExperiences() },
  { pattern: /^GET \/skills\/(.+)$/, handler: ([, id]) => getSkill(id) },
  { pattern: /^GET \/skills$/, handler: () => listSkills() },
  { pattern: /^GET \/schools\/(.+)$/, handler: ([, id]) => getSchool(id) },
  { pattern: /^GET \/schools$/, handler: () => listSchools() },
  { pattern: /^GET \/hobbies\/(.+)$/, handler: ([, id]) => getHobby(id) },
  { pattern: /^GET \/hobbies$/, handler: () => listHobbies() },
  { pattern: /^GET \/learnings\/(.+)$/, handler: ([, id]) => getLearning(id) },
  { pattern: /^GET \/learnings$/, handler: () => listLearnings() },
  { pattern: /^GET \/health$/, handler: async () => ok({ status: "healthy" }) },
];

export const handler = async (
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyStructuredResultV2> => {
  const method = event.requestContext.http.method;
  const path = event.requestContext.http.path.replace(/^\/api/, "") || "/";
  const key = `${method} ${path}`;

  for (const route of routes) {
    const match = key.match(route.pattern);
    if (match) {
      return route.handler(match);
    }
  }

  return notFound("Route");
};
