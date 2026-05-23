import { getAllItems, getItemById } from "../lib/dynamo";
import { list, notFound, serverError } from "../lib/response";
import type { Hobby } from "../lib/models";

const TABLE = process.env.HOBBIES_TABLE!;

export const listHobbies = async () => {
  try {
    const items = await getAllItems<Hobby>(TABLE);
    items.sort((a, b) => a.order - b.order);
    return list(items);
  } catch (err) {
    return serverError(err);
  }
}

export async function getHobby(id: string) {
  try {
    const item = await getItemById<Hobby>(TABLE, id);
    if (!item) return notFound("Hobby");
    return list([item]);
  } catch (err) {
    return serverError(err);
  }
}
