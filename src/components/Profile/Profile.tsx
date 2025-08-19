import c from "./Profile.module.css"
import { MyPosts } from "./MyPosts/MyPosts"

export const Profile = () => {
   return <div className={c.content}>
      <div>
         <img src="./1642519555_4-abrakadabra-fun-p-f.jpg" alt='картинка' />
      </div>
      <div className={c.content_description}>
      <div className={c.item}>
         ava + description
      </div>
         <MyPosts />
      </div>
   </div>
}