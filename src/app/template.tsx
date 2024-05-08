export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <input type="text" placeholder="Gets lost on navigation between different routes above the sibling route of this template (i.e /*) (for the routes that are in the same group (e.g app/(auth), app/blog, app/docs/ and so on) it will not change) (app/template.tsx)" className="m-3 px-3 py-1 text-slate-800" />
      {children}
    </>
  );
}
