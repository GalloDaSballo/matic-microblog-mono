import { useRouter } from "next/router";
import ReplyForm from "../../components/ReplyForm";
import usePost from "../../hooks/usePost";
import useReplies from "../../hooks/useReplies";

const SinglePostPage: React.FC = () => {
	const router = useRouter();
	const { postId } = router.query;

	const post = usePost(postId as string);
	const replies = useReplies(postId as string);

	return (
		<div>
			<div>
				<p>{post?.content}</p>
				{replies.map((post) => (
					<div>{post.content}</div>
				))}
			</div>
      <hr/>
			<div>
				<ReplyForm id={postId} />
			</div>
		</div>
	);
};

export default SinglePostPage;
