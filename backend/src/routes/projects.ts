import { getAllItems, getItemById } from "../lib/dynamo";
import { list, notFound, serverError } from "../lib/response";
import type { Project } from "../lib/models";

const TABLE = process.env.PROJECTS_TABLE!;

export const listProjects = async () => {
  try {
    const items = await getAllItems<Project>(TABLE);
    items.sort((a, b) => a.order - b.order);
    return list(items);
  } catch (err) {
    return serverError(err);
  }
}

export const getProject = async (id: string) => {
  try {
    const item = await getItemById<Project>(TABLE, id);
    if (!item) return notFound("Project");
    return list([item]);
  } catch (err) {
    return serverError(err);
  }
}
