// "use client";
// import { useState } from "react";

export const metadata = {
  title: {
    default: "Authentication",
    template: "%s | Authentication",
  },
  description: "Authentication pages",
};

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [data, setData] = useState("");

  return (
    <>
      {/* <input
        className="border px-3 py-2"
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      /> */}

      {children}
    </>
  );
}
