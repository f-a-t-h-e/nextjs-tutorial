import { notFound } from "next/navigation";

interface PageParams {
    params: { productid: string; reviewid:string };
  }
  export default function ProductReviewsDetails({ params }: PageParams) {
    if (isNaN(parseInt(params.reviewid)) || parseInt(params.reviewid) > 9) {
        notFound()
    }
    return (
      <>
        <div>
          <h1 className="text-3xl">
            Reviews {params.reviewid} Details about <a className="underline" href={`/products/${params.productid}`}> product {params.productid}</a>
          </h1>
        </div>
      </>
    );
  }
  