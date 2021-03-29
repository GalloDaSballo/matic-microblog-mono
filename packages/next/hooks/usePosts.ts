import { useEffect, useState } from "react"
import { Post } from "../types"
import {getFirst100Posts} from "../utils/graphql"

const usePosts = (): Post[] => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getFirst100Posts()
      setPosts(res)
    }
    fetchPosts()
  }, [])

  return posts
}

export default usePosts