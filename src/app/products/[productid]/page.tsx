import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: { productid: string };
}

export const generateMetadata = ({params}:Props):Metadata|Promise<Metadata> =>{
  return {
    title: `Product | ${params.productid}`
  }
}

export default function ProductDetails({ params }: Props) {
  if (Math.random() > 0.5) {
    throw new Error("Random error from product")
  }
  return (
    <>
      <div>
        <h1 className="text-3xl">
          Details about product {params.productid}
        </h1>
        <p>
            Go to the reviews page <Link className="underline" href={`./${params.productid}/reviews`}>here</Link>
        </p>
      </div>
    </>
  );
}
