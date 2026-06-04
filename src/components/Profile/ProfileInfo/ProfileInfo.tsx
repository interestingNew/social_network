import { StateType } from "../../../redux/state-redux"
import { ProfileType } from "../../../redux/types"
import { Preloader } from "../../common/Loader/Preloader"
import c from "./ProfileInfo.module.css"


type ProfileInfoTypeProps = {
   setUserProfile: (profile: ProfileType) => void
   profile: ProfileType
}
export const ProfileInfo = (props: ProfileInfoTypeProps) => {
   if(!props.profile) {
      return(
         <Preloader/>
      )
   }

   return (
      <div className={c.content}>
         <div className={c.screensaver}>
            <img src="/1642519555_4-abrakadabra-fun-p-f.jpg" alt='картинка' />
         </div>
         <div className={c.content_description}>
            <div className={c.item}>
               <div className={c.itemIMG}><img src={props.profile.photos.large ?? undefined}/></div>
               <div className={c.itemFullName}>{props.profile.fullName}</div>
               <div className={c.itemAboutMe}>{props.profile.aboutMe}</div>
               <div className={c.itemLookingForAJob}>{props.profile.lookingForAJob}</div>
               <div className={c.itemLookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
            </div>
         </div>
      </div>
   )
}