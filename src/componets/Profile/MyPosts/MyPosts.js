import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="newPostNext" component={Textarea} validate={[required, maxLength10]} placeholder="post message"/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
  )
}

const ReduxAddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
  let postElements =
    props.postsData.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  let onAddPost = (value) => {
    props.addPost(value.newPostNext);
  }
  return (
    <div className={classes.posts_block}>
      My posts
      
      <ReduxAddNewPostForm onSubmit={onAddPost}/>
      {postElements}
    </div>
  )
}


export default MyPosts; 