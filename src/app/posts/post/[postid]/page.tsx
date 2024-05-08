type PageProps = {
    params: {postid: string;}
}
export default function PostsFeedPageForSinglePost(props: PageProps) {
    return (<div >This is post {props.params.postid} from feed</div>)
}