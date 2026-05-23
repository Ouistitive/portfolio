import { getAllItems, getItemById } from "../lib/dynamo";
import { list, notFound, serverError } from "../lib/response";
import type { Experience } from "../lib/models";

const TABLE = process.env.EXPERIENCES_TABLE!;

export const listExperiences = async () => {
  try {
    const items = await getAllItems<Experience>(TABLE);
    items.sort((a, b) => a.order - b.order);
    return list(items);
  } catch (err) {
    return serverError(err);
  }
}

export const getExperience = async (id: string) => {
  try {
    const item = await getItemById<Experience>(TABLE, id);
    if (!item) return notFound("Experience");
    return list([item]);
  } catch (err) {
    return serverError(err);
  }
}
