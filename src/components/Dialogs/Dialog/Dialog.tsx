import c from "./../Dialogs.module.css"
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
   const path = "/dialogs/" + props.id
   return (
      <div className={c.dialog}>
         <NavLink className={setActive} to={path}>{props.name}</NavLink>
      </div>
   )
}