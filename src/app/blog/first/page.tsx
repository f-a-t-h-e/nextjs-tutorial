import Link from "next/link";

export default function First() {
  return (
    <div className="">
      First{" "}
      <span className="text-2xl font-bold">
        Go to{" "}
        <Link
          className="bg-slate-200 text-slate-950 inline-block py-2 px-1 active:scale-95 ms-3"
          href={"/blog/second"}
        >
          Second
        </Link>
        <Link
          className="bg-slate-200 text-slate-950 inline-block py-2 px-1 active:scale-95 ms-3"
          href={"/blog/first/third"}
        >
          Third
        </Link>
        <Link
          className="bg-slate-200 text-slate-950 inline-block py-2 px-1 active:scale-95 ms-3"
          href={"/about"}
        >
          About (/about)
        </Link>
      </span>
    </div>
  );
}
