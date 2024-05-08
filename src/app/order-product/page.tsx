"use client"

import { useRouter } from "next/navigation";

export default function OrderProductPage() {
    const router = useRouter()

    function handleClck(e:any) {
        router.push("/")
    }
  return (
    <>
      <h1 className="text-3xl my-4">Order Product Page</h1>
      <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={handleClck}>
        Place order
      </button>
    </>
  );
}
