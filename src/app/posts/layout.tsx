export default function PostsLayout({
  children,
  post
}: {
  children: React.ReactNode;
  post: React.ReactNode;
}) {
  return (
    <>
    <div className="relative">
      {children}
      {post}
    </div>
    </>
  );
}
