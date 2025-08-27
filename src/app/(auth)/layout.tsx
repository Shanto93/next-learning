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
  return <>{children}</>;
}
