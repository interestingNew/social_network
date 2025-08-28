import c from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import { MyPosts } from "./MyPosts/MyPosts"
import { ArrayPostsType } from "../.."

type PostsProps = {
      posts: ArrayPostsType
}

export const Profile = (props: PostsProps) => {
      return (
            <div className={c.content}>
                  <ProfileInfo />
                  <MyPosts posts={props.posts}/>
            </div>
      )
}