interface PageParams {
  params: { productid: string };
}
export default function ProductDetails({ params }: PageParams) {
  return (
    <>
      <div>
        <h1 className="text-3xl">
          Details about product {params.productid}
        </h1>
        <p>
            Go to the reviews page <a className="underline" href={`./${params.productid}/reviews`}>here</a>
        </p>
      </div>
    </>
  );
}
