import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  const products: "product"[] = Array(100).fill("product");
  
  const router = useRouter()

  const handleReviewClick = (pId:string|number, rId:string|number) => {
    router.push(`/product/${pId}/reviews/${rId}`)
  };
  return (
    <>
      <h1>
        <Link href="/"> Home</Link>
      </h1>
      {products.map((product, i) => {
        return (
          <div
            key={i}
            style={{
              margin: "1rem",
            }}
          >
            <Link href={`/product/${i}`} replace>
              {product} number {i}
            </Link>
            reviews :
            <br />
            <div
              style={{
                marginLeft: "1rem",
                display:"flex",
                gap:"0.5rem",
              }}
            >
              {Array(i)
                .fill("review")
                .map((review, j) => {
                  return (
                    <button key={j} onClick={()=>handleReviewClick(i, j)}>
                      {review} number {j}
                    </button>
                  );
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
