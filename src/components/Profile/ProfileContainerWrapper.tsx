import { useParams } from "react-router-dom"
import { ProfileContainerRedirect } from "./ProfileContainer"

export const ProfileContainerWrapper = () => {
   const { userId } = useParams<{userId?: string}>()
   return (
      <>
         <ProfileContainerRedirect userId={userId}/>
      </>
   )
}