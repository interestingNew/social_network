import { connect } from "react-redux";
import { StateType } from "../../redux/state-redux";
import { AppDispatch, UsersType } from "../../redux/types";
import { FollowAC, SetUsersAC, UnfollowAC } from "../../redux/users-reducer";
import { Users } from "./Users";
import UsersC from "./UsersC";

let mapStateToProps = (state: StateType) => {
   return {
      users: state.usersPage.users
   };
};

let mapDispatchToProps = (dispatch: AppDispatch) => {
   return {
      follow: (id: number) => {
         dispatch(FollowAC(id));
      },
      unfollow: (id: number) => {
         dispatch(UnfollowAC(id));
      },
      setUsers: (users: UsersType) => {
         dispatch(SetUsersAC(users));
      },
   };
};

export const UsersContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(UsersC);
