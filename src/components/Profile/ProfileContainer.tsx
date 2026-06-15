import { connect } from "react-redux";
import { Profile } from "./Profile";
import React from "react";
import { StateType } from "../../redux/state-redux";
import { getProfile } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


type OwnPropsType = {
   userId: string | undefined
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
   getProfile: (userId: string) => void
}

export type ProfileAPITypeProps = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class ProfileAPIContainer extends React.Component<ProfileAPITypeProps> {
   componentDidMount() {
      let userId = this.props.userId
      if(!userId) {
         userId = "2"
      }
      this.props.getProfile(userId)
   }

   render() {
      return <Profile {...this.props} />
   }
}

const mapStateToProps = (state: StateType) => {
   return {
      profile: state.profilePage.profile
   }
}

// const mapDispatchToProps = (dispatch: AppDispatch) => {
//    return {
//       setUserProfile: (profile: any) => {
//          dispatch(setUserProfile(profile))
//       }
//    }
// }


export const ProfileContainerRedirect = compose(
   withAuthRedirect,
   connect(
      mapStateToProps,
      {getProfile}
   )
)(ProfileAPIContainer) as React.ComponentType<any>;

// export const ProfileContainer = connect(
//    mapStateToProps,
//    {getProfile}
// )(ProfileAPIContainer)
// export const ProfileContainerRedirect = withAuthRedirect(ProfileContainer)