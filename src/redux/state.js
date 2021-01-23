import { rerenderEntireTree } from "../render"

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?' },
      { id: 2, message: 'It\'s my first post' },
    ]
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
    ]
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
}

export let addMessage = (messageText) => {
  let newMessage = {
    text: messageText
  }
  state.dialogsPage.messages.push(newMessage)
  rerenderEntireTree(state)
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}

export default state
