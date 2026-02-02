import c from "./Friend.module.css"
import { NavLink } from "react-router-dom"

type FriendPropsType = {
   name: string
   id: number
}

type isActiveType = {
   isActive: boolean
}
const setActive = ({ isActive }: isActiveType) => (isActive ? c.active : '')

export const Friend = (props: FriendPropsType) => {
   const {
      name,
      id
   } = props
   
   const path = "/dialogs/" + id
   return (
      <div className={c.friend}>
         <div className={c.avatar}>
            <img src="/pozitiv_smailik.jpg" alt="аватар" />
         </div>
         <div className={c.name}>
            <NavLink className={setActive} to={path}>{name}</NavLink>
         </div>
      </div>
   )
}