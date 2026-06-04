import { useParams } from "react-router-dom"
import { ProfileContainer } from "./ProfileContainer"

export const ProfileContainerWrapper = () => {
   const { userId } = useParams<{userId?: string}>()
   return (
      <>
         <ProfileContainer userId={userId}/>
      </>
   )
}