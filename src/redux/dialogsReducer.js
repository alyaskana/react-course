const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.content
      }
    case SEND_MESSAGE:
      let newMessage = {
        content: state.newMessageBody
      }
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, newMessage]
      }
    default:
      return state
  }
}

export const addMessageActionCreator = () => ({
  type: SEND_MESSAGE
})

export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  content: text
})

export default dialogsReducer;