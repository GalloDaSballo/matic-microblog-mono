import { useEffect, useState } from "react"
import { Post } from "../types"
import {getPost} from "../utils/graphql"

const usePosts = (postId: string): [Post | null, () => void] => {
  const [post, setPost] = useState<Post | null>(null)

  const fetchPost = async () => {
    if(!postId) {
      return
    }
    const res = await getPost(postId)
    setPost(res)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return [post, fetchPost]
}

export default usePosts