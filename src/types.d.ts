interface IPost {
  title: string;
  content: string;
  comments: number;
  likes: number;
  writerUsername: string;
  writerProfilePicture: string;
  postedAt: string;
  lastEditedAt?: string;
  id: number|string
}
