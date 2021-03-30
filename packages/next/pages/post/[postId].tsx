import { useRouter } from "next/router";
import ReplyForm from "../../components/ReplyForm";
import Replies from "../../components/Replies";
import usePost from "../../hooks/usePost";

const SinglePostPage: React.FC = () => {
	const router = useRouter();
	const { postId } = router.query;
	const [post, reloadPost] = usePost(postId as string);


	if (!postId) return <>404</>;
	return (
			<main>
				<button type="button" onClick={() => router.back()}>
					Back
				</button>
				<hr />
				<div>
					<p>{post?.content}</p>
				</div>
				<hr />
				<div>
					<ReplyForm id={postId as string} reloader={reloadPost}/>
				</div>
				<hr />
				<div>
					<Replies id={postId as string} />
				</div>
			</main>
	);
};

export default SinglePostPage;
