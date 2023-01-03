import React from 'react';
import PropTypes from 'prop-types';
import Post from './post';
import PostsList from './postsList';
import query from 'query-string';


const Posts = ({match, location}) => {
  const search =query.parse(location.search);
  console.log(search);

  const postId = match.params.postId;
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
  location: PropTypes.object,
  match: PropTypes.object.isRequired,
};
export default Posts;
