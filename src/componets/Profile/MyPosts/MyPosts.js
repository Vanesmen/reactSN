import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let postElements =
    props.postsData.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.posts_block}>
      My posts
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  )
}

export default MyPosts; 