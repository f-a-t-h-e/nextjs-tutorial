import Link from "next/link";


export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="border-b border-slate-200 bg-slate-700">
        <ul className="flex flex-wrap justify-evenly">
          <li className="p-1 min-w-32 max-w-40">
            <Link
              className="block px-3 py-1 hover:bg-white hover:text-black"
              href={`/products/special`}
            >
              Special Product
            </Link>
          </li>
          {Array(10)
            .fill("")
            .map((_, i) => {
              return (
                <li key={i} className="p-1 min-w-32 max-w-40">
                  <Link
                    className="block px-3 py-1 hover:bg-white hover:text-black"
                    href={`/products/${i}`}
                  >
                    Product {i}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      {children}
    </>
  );
}
