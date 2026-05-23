import { getAllItems, getItemById } from "../lib/dynamo";
import { list, notFound, serverError } from "../lib/response";
import type { School } from "../lib/models";

const TABLE = process.env.SCHOOLS_TABLE!;

export const listSchools = async () => {
  try {
    const items = await getAllItems<School>(TABLE);
    items.sort((a, b) => a.order - b.order);
    return list(items);
  } catch (err) {
    return serverError(err);
  }
}

export const getSchool = async (id: string) => {
  try {
    const item = await getItemById<School>(TABLE, id);
    if (!item) return notFound("School");
    return list([item]);
  } catch (err) {
    return serverError(err);
  }
}
