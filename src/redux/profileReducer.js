const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'It\'s my first post' },
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.content

      return state
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  content: text
})

export default profileReducer;