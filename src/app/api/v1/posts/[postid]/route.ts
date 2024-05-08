import { posts } from "@/app/posts/postsData";

export async function GET(
  req: Request,
  context: { params: { postid: string } }
) {
  const post = posts.find((p) => p.id == context.params.postid);
  return new Response(post ? JSON.stringify(post) : null, {
    status: post ? 200 : 404,
  });
}
