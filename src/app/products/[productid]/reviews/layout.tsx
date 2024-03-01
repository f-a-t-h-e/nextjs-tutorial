import Link from "next/link";

export const metadata = {
  title: "Products",
  description: "Custom description",
};

interface Props {
  params: { productid: string };
}

export default function ProductReviewsLayout({
  children, params
}: {
  children: React.ReactNode;params: Props["params"];
}) {
  return (
    <>
      <nav className="border-b border-slate-300 bg-slate-800">
        <ul className="flex flex-wrap justify-evenly">
          {Array(10)
            .fill("")
            .map((_, i) => {
              return (
                <li key={i} className="p-1 min-w-32 grow text-center">
                  <Link
                    className="block px-3 py-1 hover:bg-white hover:text-black"
                    href={`/products/${params.productid}/reviews/${i}`}
                  >
                    Review {i}
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
