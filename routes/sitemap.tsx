import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    try {
      // Read the sitemap.html file
      const sitemapContent = await Deno.readTextFile("./sitemap.html");
      
      // Return HTML response
      return new Response(sitemapContent, {
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    } catch (error) {
      console.error("Error reading sitemap.html:", error);
      return new Response("Sitemap not found", { status: 404 });
    }
  },
}; 