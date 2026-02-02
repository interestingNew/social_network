import c from "./../Dialog/Dialog.module.css"
import { NavLink } from "react-router-dom"

type DialogPropsType = {
   name: string
   id: number
}

type isActiveType = {
   isActive: boolean
}
const setActive = ({ isActive }: isActiveType) => (isActive ? c.active : '')

export const Dialog = (props: DialogPropsType) => {
   const {
      name,
      id
   } = props

   const path = "/dialogs/" + id
   return (
      <div className={c.dialog}>
         <div className={c.image}>
            <img src="/pozitiv_smailik.jpg" alt="аватар" />
         </div>
         <div className={c.link}>
            <NavLink className={setActive} to={path}>{name}</NavLink>
         </div>
      </div>
   )
}