import Link from "next/link";
import React from "react";

const F2 = () => {
  return (
    <div>
      <div>F2 Page</div>
      <Link href={"/f4"}>
        <div>Navigate to F4 Page</div>
      </Link>
    </div>
  );
};

export default F2;
