import c from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import { MyPosts } from "./MyPosts/MyPosts"
import { ArrayPostsType } from "../../redux/state"

type PostsProps = {
      state: {
            posts: ArrayPostsType
            newPostText: string
      }
      addNewPostItem: (newValue: string) => void
      updateNewPostText: (newPostText: string) => void
}

export const Profile = (props: PostsProps) => {
      return (
            <div className={c.content}>
                  <ProfileInfo />
                  <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} addNewPostItem={props.addNewPostItem} updateNewPostText={props.updateNewPostText}/>
            </div>
      )
}