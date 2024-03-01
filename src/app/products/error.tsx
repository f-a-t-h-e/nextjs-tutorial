"use client";

export default function ErrorBoundary({ error, reset }: { error: Error;reset: ()=> void }) {
    // To use the reset function you have to add to the page "use client"
    // "use client" has to be added here and in the "errored" page
  return (
    <>
      <h1 className="text-3xl">Error in products : {error.message} </h1>
      <button onClick={reset} className="p-4 text-5xl text-white bg-slate-800">Try again</button>
    </>
  );
}
