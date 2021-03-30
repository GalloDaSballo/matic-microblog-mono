import { useRouter } from "next/router";
import ReplyForm from "../../components/ReplyForm";
import Replies from "../../components/Replies";
import usePost from "../../hooks/usePost";
import styles from "../../styles/Home.module.scss";

const SinglePostPage: React.FC = () => {
  const router = useRouter();
  const { postId } = router.query;
  const post = usePost(postId as string);

  if (!postId) return <>404</>;
  return (
    <main className={styles.container}>
      <button type="button" onClick={() => router.back()}>
        Back
      </button>
      <hr />
      <div>
        <p>
          {post?.author} - At block: {post?.publishedAtBlock}
        </p>
        <h2>{post?.content}</h2>
      </div>
      <hr />
      <div>
        <ReplyForm id={postId as string} />
      </div>
      <hr />
      <div>
        <Replies id={postId as string} />
      </div>
    </main>
  );
};

export default SinglePostPage;
