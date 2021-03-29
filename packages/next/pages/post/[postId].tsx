import { useRouter } from 'next/router'
import usePost from '../../hooks/usePost'
import useReplies from '../../hooks/useReplies'



const SinglePostPage:React.FC = ()  => {
  const router = useRouter()
  const { postId } = router.query

  const post = usePost(postId as string)
  const replies = useReplies(postId as string)

  return (
    <div>
      <h2>{post?.content}</h2>
      {replies.map(post => <div>{post.content}</div>)}
    </div>
  )
}

export default SinglePostPage