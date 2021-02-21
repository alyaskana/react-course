const SWITCH_FOLLOW = 'SWITCH_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialState = {
  users: [],
  pageSize: 20,
  totalCount: 20,
  currentPage: 1
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
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
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })

export default usersReducer;