"use client"

import { notFound } from "next/navigation";

// import { Metadata } from "next";
import Link from "next/link";

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   // You have to do it twice ):
//   if (isNaN(parseInt(params.reviewid)) || parseInt(params.reviewid) > 9) {
//     return {
//       title: `Not found review`
//     }
//   }
//   return {
//     title: `Review | ${params.reviewid} | Product | ${params.productid}`,
//   };
// };

interface Props {
  params: { productid: string; reviewid: string };
}
export default function ProductReviewsDetails({ params }: Props) {
  if (Math.random() > 0.5) {
    throw new Error("Random error from review")
  }
  if (isNaN(parseInt(params.reviewid)) || parseInt(params.reviewid) > 9) {
    notFound();
  }
  return (
    <>
      <div>
      <input type="text" placeholder="Gets lost" className="m-3 px-3 py-1 text-slate-800" />
        <h1 className="text-3xl">
          Reviews {params.reviewid} Details about{" "}
          <Link className="underline" href={`/products/${params.productid}`}>
            product {params.productid}
          </Link>
        </h1>
      </div>
    </>
  );
}
