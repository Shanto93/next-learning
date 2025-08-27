import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the about page",
};

const AboutPage = () => {
  return (
    <div>
      <h2>This is about page</h2>
    </div>
  );
};

export default AboutPage;
