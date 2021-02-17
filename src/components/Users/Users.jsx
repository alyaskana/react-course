import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([

      {
        id: 1,
        avatarUrl: 'https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ckx0BZLGOfgD6nXhJoLZbA4MAmq-mVtRg1TeCwydjhl-Q&fn=sqr_288',
        fullName: 'Alex',
        status: 'I am a boss',
        location: {
          city: 'Moscow',
          country: 'Russia'
        },
        isFollowed: false
      },
      {
        id: 2,
        avatarUrl: 'https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ckx0BZLGOfgD6nXhJoLZbA4MAmq-mVtRg1TeCwydjhl-Q&fn=sqr_288',
        fullName: 'Tony',
        status: 'I want to eat',
        location: {
          city: 'Omsk',
          country: 'Russia'
        },
        isFollowed: false
      },
      {
        id: 3,
        avatarUrl: 'https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ckx0BZLGOfgD6nXhJoLZbA4MAmq-mVtRg1TeCwydjhl-Q&fn=sqr_288',
        fullName: 'Kate',
        status: 'meow',
        location: {
          city: 'Minsk',
          country: 'Belarus'
        },
        isFollowed: true
      },
      {
        id: 4,
        avatarUrl: 'https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ckx0BZLGOfgD6nXhJoLZbA4MAmq-mVtRg1TeCwydjhl-Q&fn=sqr_288',
        fullName: 'Oleg',
        status: ':3',
        location: {
          city: 'Saint-Petersburg',
          country: 'Russia'
        },
        isFollowed: false
      },
    ])
  }
  return (
    <div className={s.page_wrapper}>
      {
        props.users.map(u => (
          <div key={u.id} className={s.user_wrapper}>
            <div className={s.user_actions}>
              <div className={s.avatar_wrapper}>
                <img src={u.avatarUrl} className={s.avatar} />
              </div>
              <div className={s.btn_wrapper}>
                <button className={s.btn} onClick={() => { props.toggleFollow(u.id) }}>{u.isFollowed ? 'Unfollow' : 'Follow'}</button>
              </div>
            </div>
            <div className={s.user_bio}>
              <div className={s.bio}>
                <div className={s.username}>{u.fullName}</div>
                <div className={s.location}>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>
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

export default Users;