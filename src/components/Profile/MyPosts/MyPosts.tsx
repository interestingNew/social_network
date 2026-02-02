import c from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import { ActionsType, ArrayPostsType } from "../../../redux/state"
import { AddNewPostAC, UpdateNewPostTextAC } from "../../../redux/profile-reducer"

type PostsProps = {
   posts: ArrayPostsType
   newPostText: string
   addPost: () => void
   updateNewPostText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const MyPosts = (props: PostsProps) => {
   const {
      posts,
      newPostText,
      addPost,
      updateNewPostText
   } = props

   let postsElement = posts.map(p => <Post message={p.message} countLike={p.countLike} />)

   const onAddPost = () => {
      addPost()
   }

   const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateNewPostText(e)
   }

   return <div className={c.item}>
      <h3>My Posts</h3>
      <div>
         <div>
            <textarea onChange={onPostChange} value={newPostText}></textarea>
         </div>
         <div>
            <button onClick={onAddPost}>add</button>
         </div>
      </div>
      <div>
         {postsElement}
      </div>
   </div>
}