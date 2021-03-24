const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'It\'s my first post' },
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.content
      }
    }
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state
  }
}


export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  content: text
})

export default profileReducer;