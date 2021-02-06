import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import navbarReducer from "./navbarReducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'It\'s my first post' },
      ],
      newPostText: ''
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Max' },
        { id: 3, name: 'Tony' },
      ],
      messages: [
        { content: 'Hi!' },
        { content: 'Hello!' },
        { content: 'Yo!' },
      ],
      newMessageBody: ''
    },

    navbar: {
      friends: [
        {
          avatar: 'https://f1.upet.com/A_r2u6uZhnxA_x.jpg',
          name: 'Tony'
        },
        {
          avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg',
          name: 'Alex'
        },
        {
          avatar: 'https://i.pinimg.com/564x/c8/27/78/c827782e12851cd2cf4c5161c4f5445a.jpg',
          name: 'Max'
        },
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state
  },
  subscriber(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navbar = navbarReducer(this._state.navbar, action)

    this._callSubscriber(this._state)
  }
}

export default store
window.store = store
