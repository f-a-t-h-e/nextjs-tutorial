import PostCard from "./PostCard";

export interface PostsFeedProps {
  posts: IPost[];
}
export default function PostsFeed(props: PostsFeedProps) {
  return (
    <>
      {props.posts.map((post, i) => {
        return <PostCard {...post} key={i} />;
      })}
    </>
  );
}
