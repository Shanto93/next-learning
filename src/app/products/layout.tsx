import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main className="main">{children}</main>
      <p>Featured Product</p>
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
