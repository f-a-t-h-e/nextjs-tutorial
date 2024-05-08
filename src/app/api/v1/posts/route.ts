import { posts } from "@/app/posts/postsData";

export async function GET() {
    return new Response(JSON.stringify(posts), {status: 200})
}

export async function POST(req:Request) {
    return new Response(JSON.stringify(posts), {status: 201})
}