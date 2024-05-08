import Link from "next/link";

export default function NotFoundPage() {
    return(<>
    <div>
        <h1 className="text-3xl mx-auto w-fit mt-40 mb-4">This page was not found</h1>
        <Link className="mx-auto my-4 p-4 hover:bg-white hover:text-black w-fit block" href="/">Go Home</Link>
    </div>
    </>)
}