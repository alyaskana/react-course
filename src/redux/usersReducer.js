const SWITCH_FOLLOW = 'SWITCH_FOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    case SWITCH_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, isFollowed: !u.isFollowed }
          }
          return u
        })
      }
    default:
      return state
  }
}

export const toggleFollowAC = (userId) => ({ type: SWITCH_FOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;