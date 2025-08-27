import c from "./MyPosts.module.css"
import { Post } from "./Post/Post"

export const MyPosts = () => {

   let posts = [
      { message: "Bring sport into your life", countLike: 189 },
      { message: "Always develop", countLike: 295 }
   ]

   let postsElement = posts.map(p => <Post message={p.message} countLike={p.countLike} />)

   return <div className={c.item}>
      <h3>My Posts</h3>
      <div>
         {postsElement}
      </div>
   </div>
}