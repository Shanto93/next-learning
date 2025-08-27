import Link from "next/link";

const Home = () => {
  return (
    <div className="m-4 h-screen">
      <div className="flex-col justify-center items-center h-full">
        <h1 className="">Welcome to Home</h1>
        <div className="mt-4 px-3 py-2 border rounded bg-green-100 w-fit">
          <Link href="/articles/breaking-news?lang=en">English</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
