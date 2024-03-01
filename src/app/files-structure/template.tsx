export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <h2 className="text-6xl">Template.tsx</h2>
        <input
          type="text"
          placeholder="Gets lost on navigation"
          className="m-3 px-3 py-1 text-slate-800"
        />
        <div className="px-4">{children}</div>
      </div>
    </>
  );
}
