import c from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
   return (
      <div className={c.content}>
         <div>
            <img src="./1642519555_4-abrakadabra-fun-p-f.jpg" alt='картинка' />
         </div>
         <div className={c.content_description}>
            <div className={c.item}>
               ava + description
            </div>
         </div>
      </div>
   )
}