import { Header } from "./Header"
import React from "react"
import { connect } from "react-redux";
import { StateType } from "../../redux/state-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { AuthDataType, ProfileType } from "../../redux/types";
import { authAPI } from "../../api/api";

type HeaderAPIContainerPropsType = {
   isAuth: boolean
   login: string|null
   email: string|null
   setAuthUserData: (data: AuthDataType) => void
}

export class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {
   componentDidMount() {
      authAPI.getAuth()
         .then((response) => {
            if(response.data.resultCode === 0) {
               this.props.setAuthUserData(response.data.data)
            }
         });
   }
   render() {
      return <Header {...this.props}/>
   }
}

const mapStateToProps = (state: StateType) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   email: state.auth.email
})

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData}) (HeaderAPIContainer)