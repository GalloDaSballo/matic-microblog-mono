import { useEffect, useState } from "react"
import { Post } from "../types"
import {getPost} from "../utils/graphql"

const usePosts = (postId: string): Post | null => {
  const [posts, setPost] = useState<Post | null>(null)
  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPost(postId)
      setPost(res)
    }
    fetchPost()
  }, [])

  return posts
}

export default usePosts