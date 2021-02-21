import { connect } from "react-redux";
import Users from "./Users";
import React from 'react';
import { setUsersAC, toggleFollowAC, setCurrentPage, setTotalCount } from "../../redux/usersReducer";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      dispatch(toggleFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPage(currentPage))
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCount(totalCount))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;