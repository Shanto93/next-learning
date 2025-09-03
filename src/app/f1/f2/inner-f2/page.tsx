import Link from "next/link";
import React from "react";

const InnerF2 = () => {
  return (
    <div>
      <p>This is inner F2</p>
      <Link href={"/f5"}>
        <div>Navigate to F5 Page</div>
      </Link>
    </div>
  );
};

export default InnerF2;
