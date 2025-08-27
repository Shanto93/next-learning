import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Authentication",
    template: "%s | Auth",
  },
  description: "Layout for authentication pages",
};

export default function AuthenticationLayout({
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
