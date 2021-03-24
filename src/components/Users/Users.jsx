import s from "./Users.module.css";
import default_avatar_small from '../../assets/images/default_avatar_small.png'
import React from 'react';
import { NavLink } from "react-router-dom";


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={s.page_wrapper}>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && s.current_page} onClick={() => { props.onPageChanged(p) }}>{p} </span>
        })}
      </div>
      {
        props.users.map(u => (
          <div key={u.id} className={s.user_wrapper}>
            <div className={s.user_actions}>
              <div className={s.avatar_wrapper}>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : default_avatar_small} className={s.avatar} />
                </NavLink>
              </div>
              <div className={s.btn_wrapper}>
                <button className={s.btn} onClick={() => { props.toggleFollow(u.id) }}>{u.isFollowed ? 'Unfollow' : 'Follow'}</button>
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

export default Users