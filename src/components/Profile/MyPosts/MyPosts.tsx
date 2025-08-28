import c from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import { ArrayPostsType } from "../../.."

type PostsProps = {
      posts: ArrayPostsType
}

export const MyPosts = (props: PostsProps) => {

   let postsElement = props.posts.map(p => <Post message={p.message} countLike={p.countLike} />)

   return <div className={c.item}>
      <h3>My Posts</h3>
      <div>
         {postsElement}
      </div>
   </div>
}