import c from "./../Dialogs.module.css"

type MessagePropsType = {
   message: string
}

export const Message = (props: MessagePropsType) => {
   return <div className={c.message}>{props.message}</div>
}