export const metadata = {
  title: "Auth",
  description: "Custom description",
};

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        {children}
      </div>
    </>
  );
}
