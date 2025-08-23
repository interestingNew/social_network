import c from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import { MyPosts } from "./MyPosts/MyPosts"

export const Profile = () => {
      return (
            <div className={c.content}>
                  <ProfileInfo />
                  <MyPosts />
            </div>
      )
}