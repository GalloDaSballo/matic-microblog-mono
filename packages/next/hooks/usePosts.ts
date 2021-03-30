import { Post } from "../types"
import {GET_FIRST_100_POSTS_QUERY} from "../utils/graphql"
import { useQuery } from '@apollo/client';


const usePosts = (): Post[] => {
  const { data } = useQuery(GET_FIRST_100_POSTS_QUERY, {
    variables: { replyTo: "" },
    pollInterval: 2000,
    fetchPolicy: "cache-and-network"
  });

  return data?.posts || []
}

export default usePosts