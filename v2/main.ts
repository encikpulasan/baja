import { serveDir } from "jsr:@std/http/file-server";

// Serve static files from the v2 directory on port 8100
Deno.serve({ port: 8100 }, (req) => {
  return serveDir(req, {
    fsRoot: ".",
    urlRoot: "",
    showDirListing: true,
    enableCors: true,
  });
});
