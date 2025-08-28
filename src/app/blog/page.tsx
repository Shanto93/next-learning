import React from "react";

const BlogPage = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  return (
    <div>
      <h2>This is Blog Page</h2>
    </div>
  );
};

export default BlogPage;
