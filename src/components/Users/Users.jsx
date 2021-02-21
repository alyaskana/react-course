import * as axios from "axios";
import s from "./Users.module.css";
import default_avatar_small from '../../assets/images/default_avatar_small.png'
import { render } from "@testing-library/react";
import React from 'react';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className={s.page_wrapper}>
        <div>
          {pages.map(p => {
            return <span className={this.props.currentPage === p && s.current_page} onClick={() => { this.onPageChanged(p) }}>{p} </span>
          })}
        </div>
        {
          this.props.users.map(u => (
            <div key={u.id} className={s.user_wrapper}>
              <div className={s.user_actions}>
                <div className={s.avatar_wrapper}>
                  <img src={u.photos.small != null ? u.photos.small : default_avatar_small} className={s.avatar} />
                </div>
                <div className={s.btn_wrapper}>
                  <button className={s.btn} onClick={() => { this.props.toggleFollow(u.id) }}>{u.isFollowed ? 'Unfollow' : 'Follow'}</button>
                </div>
              </div>
              <div className={s.user_bio}>
                <div className={s.bio}>
                  <div className={s.username}>{u.name}</div>
                  <div className={s.location}>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                  </div>
                </div>
                <div className={s.status}>{u.status}</div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Users;