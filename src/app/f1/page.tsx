import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <div>
      <div>F1 Page</div>
      <Link href={"/f1/f2"}>
        <div>Navigate to F2 Page</div>
      </Link>
      <Link href={"/f3"}>
        <div>Navigate to F3 Page</div>
      </Link>
    </div>
  );
};

export default F1;
