import {
  int,
  text,
  singlestoreTable,
  index,
} from "drizzle-orm/singlestore-core";

export const users = singlestoreTable("users_table", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
  age: int("age"),
});

export const files = singlestoreTable(
  "files_table",
  {
    id: int("id").primaryKey().autoincrement(),
    name: text("name"),
    url: text("url"),
    parent: text("parent"),
    size: int("size"),
  },
  (t) => {
    return [index("parent_index").on(t.parent)];
  },
);
