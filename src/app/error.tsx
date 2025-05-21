"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div>
      <h3>오류 발생 🚨 : {error.message}</h3>
      <button
        onClick={() =>
          startTransition(() => {
            router.refresh();
            reset();
          })
        }
      >
        재시도
      </button>
    </div>
  );
}
