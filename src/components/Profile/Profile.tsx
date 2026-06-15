import c from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../redux/types";


type ProfilePropsType = {
   profile: ProfileType | null,
   userId: string | undefined
}

export const Profile = (props: ProfilePropsType) => {
   return (
      <div className={c.content}>
         <ProfileInfo {...props}/>
         <MyPostsContainer />
      </div>
   );
};
