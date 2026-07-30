import { cp, mkdir, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url);
const client = new URL("../dist/client/", import.meta.url);
const server = new URL("../dist/server/", import.meta.url);
const distPath = fileURLToPath(dist);
const clientPath = fileURLToPath(client);

await mkdir(client, { recursive: true });

for (const entry of await readdir(distPath, { withFileTypes: true })) {
  if (entry.name === "client" || entry.name === "server") continue;
  await cp(join(distPath, entry.name), join(clientPath, entry.name), {
    recursive: true,
  });
}

await mkdir(server, { recursive: true });
await writeFile(
  new URL("index.js", server),
  `export default {
  async fetch(request, env) {
    if (env?.ASSETS?.fetch) return env.ASSETS.fetch(request);
    return new Response("Asset binding unavailable", { status: 503 });
  },
};
`,
);
