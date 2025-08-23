import c from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"

type DialogPropsType = {
   name: string
   id: number
}

type isActiveType = {
   isActive: boolean
}
const setActive = ({ isActive }: isActiveType) => (isActive ? c.active : '')

const Dialog = (props: DialogPropsType) => {
   const path = "/dialogs/" + props.id
   return (
      <div className={c.dialog}>
         <NavLink className={setActive} to={path}>{props.name}</NavLink>
      </div>
   )
}

type MessagePropsType = {
   message: string
}

const Message = (props: MessagePropsType) => {
   return <div className={c.message}>{props.message}</div>
}


export const Dialogs = () => {
   return (
      <div className={c.gialogs}>
         <div className={c.dialog_item}>
            <Dialog name={"Natali"} id={1} />
            <Dialog name={"Ira"} id={2} />
            <Dialog name={"Sergey"} id={3} />
            <Dialog name={"Alex"} id={4} />
            <Dialog name={"Sveta"} id={5} />
         </div>
         <div className={c.messages}>
            <Message message={"Hello"} />
            <Message message={"How are you"} />
            <Message message={"Bench"} />
         </div>
      </div>
   )
}