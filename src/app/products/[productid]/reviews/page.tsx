import Link from "next/link";

interface Props {
  params: { productid: string };
}
export default function ProductReviews({ params }: Props) {
  return (
    <>
      <div>
        <h1 className="text-3xl">
          Reviews about{" "}
          <Link className="underline" href={`/products/${params.productid}`}>
            {" "}
            product {params.productid}
          </Link>
        </h1>
      </div>
    </>
  );
}
