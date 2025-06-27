import { Head } from "$fresh/runtime.ts";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import WhatsAppFloat from "./WhatsAppFloat.tsx";

interface LayoutProps {
  title: string;
  description: string;
  children: any;
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <div class="font-sans text-gray-900 overflow-x-hidden">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}
