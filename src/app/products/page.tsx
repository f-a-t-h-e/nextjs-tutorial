export default function Products() {
    return (
        <div>
            <h1 className="text-3xl underline">Products</h1>
            <ul className="flex flex-wrap justify-evenly">
                <li className="p-1 min-w-32 max-w-40"
                ><a className="block px-3 py-1 hover:bg-white hover:text-black" href={`/products/special`}>Special Product</a></li>
                {Array(10).fill("").map((_,i)=>{
                    return (
                    <li key={i} className="p-1 min-w-32 max-w-40"
                    ><a className="block px-3 py-1 hover:bg-white hover:text-black" href={`/products/${i}`}>Product {i}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}