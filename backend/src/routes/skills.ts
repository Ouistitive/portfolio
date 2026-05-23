import { getAllItems, getItemById } from "../lib/dynamo";
import { list, notFound, serverError } from "../lib/response";
import type { Skill } from "../lib/models";

const TABLE = process.env.SKILLS_TABLE!;

export const listSkills = async () => {
  try {
    const items = await getAllItems<Skill>(TABLE);
    items.sort((a, b) => a.order - b.order);
    return list(items);
  } catch (err) {
    return serverError(err);
  }
}

export const getSkill = async (id: string) => {
  try {
    const item = await getItemById<Skill>(TABLE, id);
    if (!item) return notFound("Skill");
    return list([item]);
  } catch (err) {
    return serverError(err);
  }
}
