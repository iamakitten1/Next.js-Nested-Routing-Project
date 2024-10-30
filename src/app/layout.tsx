import React, { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;   //TIPIZIREBA//
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Next.js Nested Routing Project</h1>
        </header>
        <main>{children}</main> 
      </body>
    </html>
  );
}

