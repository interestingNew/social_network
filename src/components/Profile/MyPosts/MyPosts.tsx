import c from "./MyPosts.module.css"
import { Post } from "./Post/Post"

export const MyPosts = () => {
   return <div className={c.item}>
   <h3>My Posts</h3>
   <div>
      <Post message={"Bring sport into your life"} countLike={189}/>
      <Post message={"Always develop"} countLike={295}/>
   </div>
</div>
}