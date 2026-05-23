import { getAllItems, getItemById } from "../lib/dynamo";
import { list, notFound, serverError } from "../lib/response";
import type { Learning } from "../lib/models";

const TABLE = process.env.LEARNINGS_TABLE!;

export const listLearnings = async () => {
  try {
    const items = await getAllItems<Learning>(TABLE);
    items.sort((a, b) => a.order - b.order);
    return list(items);
  } catch (err) {
    return serverError(err);
  }
}

export const getLearning = async (id: string) => {
  try {
    const item = await getItemById<Learning>(TABLE, id);
    if (!item) return notFound("Learning");
    return list([item]);
  } catch (err) {
    return serverError(err);
  }
}
