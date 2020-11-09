import React from 'react';
import classes from './Post.module.css';

function Post (props) {
  return (
    <div className={classes.post_item}>
      <div className={classes.item}>{props.message}</div>
      <div>Like: {props.likeCount}</div>
    </div>    
  )
}

export default Post; 