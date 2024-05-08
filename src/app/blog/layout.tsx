export default function BlogsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
      <div className="text-3xl flex flex-col items-center py-4">
        {children}
      </div>
      </>
    );
  }
  