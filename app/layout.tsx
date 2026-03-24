import type { Metadata } from "next";
import { cookies } from "next/headers";

async function HeaderButton() {
  const cookieStore = await cookies();
  const hasUsername = cookieStore.has("username");
  return (
    <button id="headerButton">
      {/* Only display account if user is logged in */}
      <a href="/login">
        {hasUsername ? "Account" : "Sign Up / Log In"}
      </a>
    </button>
  );
}

export const metadata: Metadata = {
  title: "LiveLink Events",
  description: "Purchase tickets with ease and confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* below code allows for custom fonts from Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis:YEAR@1979&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        {/* Header here for consistency between pages */}
        <header>
          <span>
              <h2><a href="/"><i>LiveLink Events</i></a></h2>
          </span>
          <span>
              <HeaderButton />
          </span>
        </header>
        {children}
      </body>
    </html>
  );
}
