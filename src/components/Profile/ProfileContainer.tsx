import { connect } from "react-redux";
import { Profile } from "./Profile";
import React from "react";
import { setUserProfile } from "../../redux/profile-reducer";
import { StateType } from "../../redux/state-redux";
import { ProfileType } from "../../redux/types";
import { profileAPI } from "../../api/api";


type OwnPropsType = {
   userId: string | undefined
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
   setUserProfile: (profile: ProfileType) => void
}

export type ProfileAPITypeProps = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class ProfileAPIContainer extends React.Component<ProfileAPITypeProps> {
   componentDidMount() {
      let userId = this.props.userId
      if(!userId) {
         userId = "2"
      }
      profileAPI.getProfile(userId)
         .then((response) => {
            this.props.setUserProfile(response.data);
         });
   }

   render() {
      return (
         <Profile {...this.props} />
      )
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

export const ProfileContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {setUserProfile})(ProfileAPIContainer)