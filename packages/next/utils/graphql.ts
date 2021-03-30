import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { MUMBAI_SUBGRAPH_URL } from "./constants";
import { Post } from "../types";


export const client = new ApolloClient({
    uri: MUMBAI_SUBGRAPH_URL,
    cache: new InMemoryCache(),
});

export const GET_FIRST_100_POSTS_QUERY = gql`
query posts($replyTo: String!) {
    posts(
        orderBy: publishedAtBlock
        orderDirection: desc
        where: { replyTo: $replyTo }
    ) {
        id
        publishedAtBlock
        author
        content
        replyTo
        likes
        dislikes
    }
}
`

/**
 * Load the first 100 posts
 * Adding replyTo loads the first 100 replies
 * @param replyTo 
 * @returns 
 */
export const getFirst100Posts = async (replyTo: string = ""): Promise<Post[]> => {
    const result = await client.query({
        query: GET_FIRST_100_POSTS_QUERY,
        variables: { replyTo: replyTo },
    });
    return result.data.posts;
};

export const GET_POST_QUERY = gql`
query posts($postId: String!) {
    posts(
        orderBy: publishedAtBlock
        orderDirection: desc
        where: { id: $postId }
    ) {
        id
        publishedAtBlock
        author
        content
        replyTo
        likes
        dislikes
    }
}
`

export const getPost = async (postId: string): Promise<Post> => {
    const result = await client.query({
        query: GET_POST_QUERY,
        variables: { postId: postId },
    });
    return result.data.posts[0];
};