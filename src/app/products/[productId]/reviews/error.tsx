"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ReviewError = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  const handleReload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <p>{error.message} </p>
      <button onClick={handleReload} className="border rounded-md px-2">
        Try again
      </button>
    </div>
  );
};

export default ReviewError;
