import React from "react";

const DocsSlug = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  if (slug.length === 2) {
    return (
      <h2>
        Docs for Feature {slug[0]} and product {slug[1]}
      </h2>
    );
  } else if (slug.length === 1) {
    return <h2> Docs for Feature {slug[0]} </h2>;
  }
  return <h2> Docs Home page </h2>;
};

export default DocsSlug;
