import { Metadata } from "next";
import Link from "next/link";

/**
 * This will not work https://github.com/vercel/next.js/issues/45620
 */
export const metadata: Metadata = {
  title: "Not found review title not applied",
};

export default function ReviewNotFound() {
  return (
    <>
      <div>
        <h1 className="text-3xl mx-auto w-fit mt-40 mb-4">
          This review was not found
        </h1>
        <Link
          className="mx-auto my-4 p-4 hover:bg-white hover:text-black w-fit block"
          href="/"
          replace
        >
          Go Home
        </Link>
      </div>
    </>
  );
}
