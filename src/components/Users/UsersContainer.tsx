import { connect } from "react-redux";
import { StateType } from "../../redux/state-redux";
import { AppDispatch, UsersType } from "../../redux/types";
import { FollowAC, SetCurrentPageAC, SetUsersAC, UnfollowAC } from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import { Usersss } from "./Usersss";

export type UsersAPITypeProps = {
   users: UsersType;
   pageSize: number;
   totalUsersCount: number;
   currentPage: number;
   follow: (id: number) => void;
   unfollow: (id: number) => void;
   setUsers: (users: UsersType) => void;
   setCurrentPage: (pageNumber: number) => void;
};

class UsersAPIContainer extends React.Component<UsersAPITypeProps> {
   //включаем 58 видео
   componentDidMount(): void {
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
         )
         .then((response) => {
            this.props.setUsers(response.data.items);
         });
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
         )
         .then((response) => {
            this.props.setUsers(response.data.items);
         });
   };

   render() {
      return (
         <Usersss
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
         />
      );
   }
}

let mapStateToProps = (state: StateType) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
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
      setCurrentPage: (pageNumber: number) => {
         dispatch(SetCurrentPageAC(pageNumber));
      },
   };
};

export const UsersContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(UsersAPIContainer);