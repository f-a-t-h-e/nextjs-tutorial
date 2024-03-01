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
      className="w-full h-full absolute -z-50 bg-slate-950/35"
      onClick={hundleClose}
    >
      <style jsx global>{`
        body {
          overflow-y: clip;
      `}</style>
    </div>
  );
}
