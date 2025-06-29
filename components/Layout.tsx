import { Head } from "$fresh/runtime.ts";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import WhatsAppFloat from "./WhatsAppFloat.tsx";

interface LayoutProps {
  title: string;
  description: string;
  children: preact.ComponentChildren;
  url?: URL;
}

export default function Layout(
  { title, description, children, url }: LayoutProps,
) {
  // Extract the current path from the URL, default to "/" if not provided
  const currentPath = url?.pathname || "/";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="min-h-screen flex flex-col">
        <Header currentPath={currentPath} />
        <main class="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}
