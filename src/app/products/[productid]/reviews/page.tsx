interface PageParams {
    params: { productid: string };
  }
  export default function ProductReviews({ params }: PageParams) {
    return (
      <>
        <div>
          <h1 className="text-3xl">
            Reviews about <a className="underline" href={`/products/${params.productid}`}> product {params.productid}</a>
          </h1>
          <ul className="flex flex-wrap justify-evenly">
                {Array(10).fill("").map((_,i)=>{
                    return (
                    <li key={i} className="p-1 min-w-32 grow text-center"
                    ><a className="block px-3 py-1 hover:bg-white hover:text-black" href={`/products/${params.productid}/reviews/${i}`}>Review {i}</a></li>
                    )
                })}
            </ul>
        </div>
      </>
    );
  }
  