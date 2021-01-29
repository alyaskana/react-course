import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscriber } from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from "./redux/state";
import { addMessage } from "./redux/state";
import { updateNewPostText } from "./redux/state";
import { updateMessageText } from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateMessageText={updateMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state)
subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
