import c from "./MyPosts.module.css"
import { Post } from "./Post/Post"

export const MyPosts = () => {
   return <div className={c.item}>
   My posts
   <div className={c.item}>
      New posts
   </div>
   <div>
      <Post message={"Bring sport into your life"} countLike={189}/>
      <Post message={"Always develop"} countLike={295}/>
   </div>
</div>
}