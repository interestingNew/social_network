import { connect } from "react-redux";
import { StateType } from "../../redux/state-redux";
import { UsersType } from "../../redux/types";
import { follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow } from "../../redux/users-reducer";
import React from "react";
import { Usersss } from "./Usersss";
import { Preloader } from "../common/Loader/Preloader";


export type UsersAPITypeProps = {
   users: UsersType;
   pageSize: number;
   totalUsersCount: number;
   currentPage: number;
   isFetching: boolean;
   isFollowingProgress: number[];
   follow: (id: number) => void;
   unfollow: (id: number) => void;
   setCurrentPage: (pageNumber: number) => void;
   getUsers: (currentPage: number, pageSize: number) => void
};

class UsersAPIContainer extends React.Component<UsersAPITypeProps> {
   //включаем 58 видео
   componentDidMount(): void {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber);
      this.props.getUsers(pageNumber, this.props.pageSize)
   };

   render() {
      return (
         <>
         {this.props.isFetching? <Preloader/> : null}
            <Usersss
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               isFollowingProgress={this.props.isFollowingProgress}
            />
         </>
      );
   }
}

let mapStateToProps = (state: StateType) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      isFollowingProgress: state.usersPage.isFollowingProgress
   };
};

// let mapDispatchToProps = (dispatch: AppDispatch) => {
//    return {
//       follow: (id: number) => {
//          dispatch(FollowAC(id));
//       },
//       unfollow: (id: number) => {
//          dispatch(UnfollowAC(id));
//       },
//       setUsers: (users: UsersType) => {
//          dispatch(SetUsersAC(users));
//       },
//       setCurrentPage: (pageNumber: number) => {
//          dispatch(SetCurrentPageAC(pageNumber));
//       },
//       toogleIsFetching: (isFetching: boolean) => {
//          dispatch(ToogleIsFetchingAC(isFetching))
//       }
//    };
// };

export const UsersContainer = connect(
   mapStateToProps,        //вместо ф-ии mapDispatchToProps отдаем об-кт, со св-ми, имена которых совпадают с AC
   {
      follow,
      unfollow,
      setCurrentPage,
      getUsers
   }
)(UsersAPIContainer);