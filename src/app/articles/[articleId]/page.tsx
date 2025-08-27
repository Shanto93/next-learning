import Link from "next/link";
import React from "react";

const NewsArticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: "en" | "fr" | "ban" }>;
}) => {
  const articleId = (await params).articleId;
  const lang = (await searchParams).lang;
  return (
    <div>
      <p>Article Id {articleId} </p>
      <p>News article in {lang} </p>

      <div className="gap-4 mt-4">
        <Link className="mt-4 ml-4 px-3 py-2 border rounded bg-green-100 w-fit" href="/articles/breaking-news?lang=en">English</Link>
        <Link className="mt-4 ml-4 px-3 py-2 border rounded bg-green-100 w-fit" href="/articles/breaking-news?lang=ban">Bangla</Link>
        <Link className="mt-4 ml-4 px-3 py-2 border rounded bg-green-100 w-fit" href="/articles/breaking-news?lang=fr">Franch</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
