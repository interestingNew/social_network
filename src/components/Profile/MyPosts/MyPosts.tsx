import { useRef } from "react"
import c from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import { ArrayPostsType } from "../../../redux/state"

type PostsProps = {
      posts: ArrayPostsType
      newPostText: string
      addNewPostItem: (newValue: string) => void
      updateNewPostText: (newPostText: string) => void
}

export const MyPosts = (props: PostsProps) => {

   let postsElement = props.posts.map(p => <Post message={p.message} countLike={p.countLike} />)

   let textAreaRef = useRef<HTMLTextAreaElement>(null)

   const addNewPost = () => {
      if(textAreaRef.current?.value.trim()) {
         props.addNewPostItem(textAreaRef.current.value)
      }
   }

   const onChangeHandler = () => {
      if(textAreaRef.current?.value.trim()) {
         props.updateNewPostText(textAreaRef.current.value)
      }
   }

   return <div className={c.item}>
      <h3>My Posts</h3>
      <div>
         <div>
            <textarea ref={textAreaRef} onChange={onChangeHandler} value={props.newPostText}></textarea>
         </div>
         <div>
            <button onClick={addNewPost}>add</button>
         </div>
      </div>
      <div>
         {postsElement}
      </div>
   </div>
}