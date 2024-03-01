import { posts } from "./postsData";
import PostsFeed from "./PostsFeed";


export default function PostsFeedPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl">Posts Feed Page</h1>
      <input type="text" placeholder="Doesn't get lost" className="m-3 px-3 py-1 text-slate-800" />
        <div className="flex flex-col mx-auto my-4 gap-2 bg-slate-800 rounded-md p-2 max-w-2xl">
          <PostsFeed posts={posts} />
        </div>
      </div>
    </>
  );
}
