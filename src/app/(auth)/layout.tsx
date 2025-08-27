import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Layout",
  description: "Layout for authentication pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <p>Header</p>
        {children}
        <p>Footer</p>
      </body>
    </html>
  );
}
