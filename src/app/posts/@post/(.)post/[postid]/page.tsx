import { posts } from "@/app/posts/postsData";
import Link from "next/link";
import { notFound } from "next/navigation";
import Overlay from "@/components/NavOverlay";
import Image from "next/image";

export default function PostCardOnFeed({
  params: { postid },
}: {
  params: { postid: string };
}) {
  const post = posts.find((p) => p.id == postid);
  if (!post) {
    notFound();
  }
  const {
    title,
    content,
    comments,
    likes,
    writerUsername,
    writerProfilePicture,
    postedAt,
    lastEditedAt,
    id,
  } = post;

  return (
    <>
      {/* Use absolute to cover only the feed section */}
      {/* <div className="absolute top-0 left-0 z-[100] w-full h-full"> */}
      <div className="fixed top-0 left-0 z-[100] w-full h-full">
        <div className="relative grid grid-cols-1 grid-rows-[20vh_1fr_20vh] h-full w-full max-h-screen overflow-y-scroll -z-[1]">
          <Overlay url="/posts" />
          {/* <div className="h-full w-full pointer-events-none  min-h-screen px-2"> */}
            <div className="max-w-3xl pointer-events-auto mx-auto row-[2/3] col-[1/2]">
              <h1 className="text-3xl bg-slate-800/90 text-center py-2">This post {postid} for feed</h1>
              <div key={id} className="bg-slate-700 rounded-lg p-4">
                <div className="flex items-center">
                  <Image
                    width={32} height={32}
                    src={writerProfilePicture}
                    alt={writerUsername}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <span className="text-slate-400">{writerUsername}</span>
                </div>
                <h2 className="text-xl text-slate-100 font-bold mb-2">
                  <Link href={`/posts/post/${id}`} className="hover:underline" scroll={false}>
                    {title}
                  </Link>
                </h2>
                <p className="text-slate-300 mb-4 text-base">{content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-slate-400 mr-2">
                      {comments} Comments
                    </span>
                    <span className="text-slate-400">{likes} Likes</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-slate-500 text-sm">{postedAt}</span>
                  {lastEditedAt && (
                    <span className="text-slate-500 text-sm">
                      Last edited: {lastEditedAt}
                    </span>
                  )}
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
