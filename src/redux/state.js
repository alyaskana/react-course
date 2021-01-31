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
        { text: 'Hi!' },
        { text: 'Hello!' },
        { text: 'Yo!' },
      ],
      newMessageText: ''
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

  // addMessage() {
  //   let newMessage = {
  //     text: this._state.dialogsPage.newMessageText
  //   }
  //   this._state.dialogsPage.messages.push(newMessage)
  //   this._state.dialogsPage.newMessageText = ''
  //   this._callSubscriber(this._state)
  // },
  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText
  //   }
  //   this._state.profilePage.posts.push(newPost)
  //   this._state.profilePage.newPostText = ''
  //   this._callSubscriber(this._state)
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText
  //   this._callSubscriber(this._state)
  // },
  // updateMessageText(newText) {
  //   this._state.dialogsPage.newMessageText = newText
  //   this._callSubscriber(this._state)
  // },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        text: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText
      this._callSubscriber(this._state)
    }
  }
}

export default store
window.store = store
