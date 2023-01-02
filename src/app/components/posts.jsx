import React from 'react';
import PropTypes from 'prop-types';
import Post from './post';
import PostsList from './postsList';


const Posts = ({match}) => {
  const postId = match.params.postId;
  console.log(postId);
  const posts = [
    {id: 1, label: 'post 1'},
    {id: 2, label: 'post 2'},
    {id: 3, label: 'post 3'}];
  return <>
    {postId?
        <Post {...{posts}} id={postId}/>:
        <PostsList {...{posts}}/>}
  </>;
};

Posts.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Posts;
