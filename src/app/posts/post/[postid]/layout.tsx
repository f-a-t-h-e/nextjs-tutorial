export default function PostsLayout({
  children,
  post
}:
{
  children: React.ReactNode;
  post: React.ReactNode;
}) {
  return (
    <>
      {/* <div className="relative"> */}
      <div>This is template /posts/post/[postid]/layout.tsx</div>
      {children}
      <div>N{post}O post param passed to /posts/post/[postid]/layout.tsx</div>
      {/* </div> */}
    </>
  );
}
