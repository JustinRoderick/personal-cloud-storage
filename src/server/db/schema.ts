import {
  int,
  bigint,
  text,
  singlestoreTable,
  index,
} from "drizzle-orm/singlestore-core";

export const files_table = singlestoreTable(
  "files_table",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    name: text("name").notNull(),
    url: text("url").notNull(),
    parent: bigint("parent", { mode: "number", unsigned: true }).notNull(),
    size: int("size").notNull(),
  },
  (t) => {
    return [index("parent_index").on(t.parent)];
  },
);

export const folders_table = singlestoreTable(
  "folders_table",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    name: text("name").notNull(),
    parent: bigint("parent", { mode: "number", unsigned: true }),
  },
  (t) => {
    return [index("parent_index").on(t.parent)];
  },
);
