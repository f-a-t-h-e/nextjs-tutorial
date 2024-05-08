"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface ILink {
  text: string;
  path: string;
  subLinks?: (ILink & { subLinks?: never })[];
}
const links: ILink[] = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Profile", path: "/profile" },
  {
    text: "Blog",
    path: "/blog",
    subLinks: [
      { text: "First", path: "/blog/first" },
      { text: "Second", path: "/blog/second" },
    ],
  },
  { text: "Products", path: "/products" },
  { text: "Docs", path: "/docs" },
  { text: "Dashboard", path: "/dashboard" },
  { text: "_underscore", path: "/_underscore" },
  { text: "Login", path: "/login" },
  { text: "Register", path: "/register" },
  { text: "Forgot Password", path: "/forgot-password" },
  { text: "Order Product", path: "/order-product"},
  { text: "Files Structure", path: "/files-structure"},
  { text: "Intercepted routes (Posts Feed)", path: "/posts"},
  { text: "Intercepted routes test", path: "/posts/post/1"}
];

function getLinksHtml(links: ILink[]) {
    const pathname = usePathname()
    return (
    <>
      {links.map((link) => {
        if (link.subLinks) {
          return (
            <li className="[&:hover>ul]:block relative" key={link.path}>
              <Link href={link.path}  className={pathname.startsWith(link.path) ? "font-bold text-slate-600 bg-slate-100" : "bg-slate-600 text-slate-100 hover:bg-slate-100 hover:text-slate-600"}>blog</Link>
              <ul className="hidden absolute top-full left-0 bg-slate-600 outline outline-1 outline-slate-100 shadow-sm rounded-md rounded-t-none overflow-hidden shadow-white">
                {link.subLinks.map((subLink) => {
                  return (
                    <li className="border-b [&:not(:last-child)]:border-b-slate-100" key={subLink.path}>
                      <Link href={subLink.path} className={pathname === subLink.path ? "font-bold text-slate-600 bg-slate-100" : "bg-slate-600 text-slate-100 hover:bg-slate-100 hover:text-slate-600"}>{subLink.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        }
        return (
          <li key={link.path}>
            <Link href={link.path} className={pathname === link.path ? "font-bold text-slate-600 bg-slate-100" : "bg-slate-600 text-slate-100 hover:bg-slate-100 hover:text-slate-600"}>{link.text}</Link>
          </li>
        );
      })}
    </>
  );
}
export default function Nav() {
  const [value, setValue] = useState("");
  const router = useRouter();
    return (
    <nav className="bg-slate-600 border-b border-b-slate-100">
      <input type="text" placeholder="Doesn't get lost" className="m-3 px-3 py-1 text-slate-800"
      value={value} onChange={(e)=> setValue(e.target.value)}/>
      <ul className="flex flex-wrap justify-evenly [&_a]:min-w-32 [&_a]:block [&_a]:p-2 text-center">
      <li>
            <Link href="/" className="bg-slate-600 text-slate-100">Home with <code>a</code></Link>
          </li>
        {getLinksHtml(links)}
      </ul>
      <div className="flex items-center justify-center py-2">
        <button className="rounded-lg bg-slate-800 py-2 px-4 active:scale-95"
        onClick={()=> router.refresh()}
        >Refersh <code>router.refresh()</code></button>
      </div>
    </nav>
  );
}
