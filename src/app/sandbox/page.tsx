import { mockFolders, mockFiles } from "~/lib/mock-data";
import { db } from "~/server/db";
import { files_table, folders_table } from "~/server/db/schema";

export default function SandboxPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <form
        action={async () => {
          "use server";
          await db.insert(folders_table).values(
            mockFolders.map((folder, index) => ({
              id: index + 1,
              name: folder.name,
              parent: index === 0 ? null : 1,
            })),
          );
          await db.insert(files_table).values(
            mockFiles.map((file, index) => ({
              id: index + 1,
              name: file.name,
              url: file.url,
              parent: (index % 3) + 1,
              size: 5000,
            })),
          );
        }}
      >
        <button type="submit">seed data</button>
      </form>
    </div>
  );
}
