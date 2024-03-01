"use client";

import { notFound } from "next/navigation";

export default function Page() {
  return (
    <>
      <div>
        <h3 className="text-5xl mx-auto w-fit mt-40 mb-4">The Page</h3>
        <button
          className="mx-auto bg-slate-400 p-3 rounded-md text-slate-800 border border-slate-800 hover:bg-slate-800 hover:text-slate-400 hover:border-slate-400"
          onClick={() => notFound()}
        >
          Go to not found
        </button>
      </div>
    </>
  );
}
