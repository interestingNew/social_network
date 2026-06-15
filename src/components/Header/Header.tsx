import { NavLink } from "react-router-dom"
import c from "./Header.module.css"
import { AuthDataType, ProfileType } from "../../redux/types"


type HeaderPropsType = {
   isAuth: boolean
   login: string|null
   email: string|null
   setAuthUserData: (data: AuthDataType) => void
}

export const Header = ({isAuth, login, email, setAuthUserData}: HeaderPropsType) => {
   return <header className={c.header}>
      <img src="/лого.jpg" alt='лого' />
      <div className={c.authDataUserBlock}>
      <div className={c.loginBlock}>
         {isAuth? login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
      <div className={c.emailBlock}>
         {isAuth? email : <NavLink to={"/login"}></NavLink>}
      </div>
      </div>
   </header>
}