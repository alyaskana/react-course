import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'It\'s my first post' },
  ]

  let postsElements = posts.map(p => (
    <Post message={p.message} />
  ))

  return (
    <div className={s.posts_block}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;