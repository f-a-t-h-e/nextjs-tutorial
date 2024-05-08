"use client";
import { useRouter } from "next/navigation";
export default function Overlay({
  url,
  scroll = false,
}: {
  url: string;
  scroll?: boolean;
}) {
  const router = useRouter();
  function hundleClose() {
    router.replace(url, { scroll });
  }
  return (
    <div
      className="min-w-full min-h-full absolute -z-50 bg-slate-950/35 top-0 left-0 row-[1/4] col-[1/2]"
      onClick={hundleClose}
    >
      <style jsx global>{`
        body {
          overflow-y: hidden;
      `}</style>
    </div>
  );
}
