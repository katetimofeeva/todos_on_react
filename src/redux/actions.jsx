import { nanoid } from "nanoid";

export const add = (value) => ({
  type: "TODOS/ADD",
  description: value,
  id: nanoid(10)
});
