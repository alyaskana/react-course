import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';


const MyPosts = (props) => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} />
  ))

  let newPostElement = React.createRef()

  let addPost = () => {
    debugger
    let text = newPostElement.current.value
    props.addPost(text)
  }

  return (
    <div className={s.posts_block}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;