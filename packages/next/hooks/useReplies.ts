import { useEffect, useState } from "react"
import { Post } from "../types"
import {getFirst100Posts} from "../utils/graphql"

const usePosts = (postId: string): Post[] => {
  const [replies, setReplies] = useState<Post[]>([])
  useEffect(() => {
    const fetchReplies = async () => {
      const res = await getFirst100Posts(postId)
      setReplies(res)
    }
    fetchReplies()
  }, [])

  return replies
}

export default usePosts