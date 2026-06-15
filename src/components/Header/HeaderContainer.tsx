import { Header } from "./Header"
import React from "react"
import { connect } from "react-redux";
import { StateType } from "../../redux/state-redux";
import { setAuthUserData, getAuth } from "../../redux/auth-reducer";
import { AuthDataType } from "../../redux/types";

type HeaderAPIContainerPropsType = {
   isAuth: boolean
   login: string|null
   email: string|null
   id: number|null
   setAuthUserData: (data: AuthDataType) => void
   getAuth: () => void
}

export class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {
   componentDidMount() {
      this.props.getAuth()
   }
   render() {
      return <Header {...this.props}/>
   }
}

const mapStateToProps = (state: StateType) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   email: state.auth.email,
   id: state.auth.id
})

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData, getAuth}) (HeaderAPIContainer)