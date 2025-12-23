import c from "./Post.module.css"

type Props = {
   message: string
   countLike: number
}

export const Post = (props: Props) => {
   return (
      <div className={c.item}>
         <div className={c.imageMessage}>
            <div className={c.image}>
               <img src="./pozitiv_smailik.jpg" alt="аватар" />
            </div>
            <div className={c.message}>
               {props.message}
            </div>
         </div>
         <div className={c.countLike}>
            <span>like {props.countLike}</span>
         </div>
      </div>
   )
}