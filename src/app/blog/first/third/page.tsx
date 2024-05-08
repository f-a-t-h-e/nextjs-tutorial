import Link from "next/link";

export default function Third() {
  return (
    <div className="">
      Third{" "}
      <span className="text-2xl font-bold">
        Go to{" "}
        <Link
          className="bg-slate-200 text-slate-950 inline-block py-2 px-1 active:scale-95 ms-3"
          href={"/blog/first"}
        >
          First
        </Link>
        <Link
          className="bg-slate-200 text-slate-950 inline-block py-2 px-1 active:scale-95 ms-3"
          href={"/blog/second"}
        >
          Second
        </Link>
      </span>
    </div>
  );
}
