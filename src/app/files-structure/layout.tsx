export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<div>
    <h1 className="text-7xl">Layout</h1>
    <div className="px-4">
        {children}
    </div>
</div>
  );
}
