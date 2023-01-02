import React from 'react';
import PropTypes from 'prop-types';


const Post = ({match, posts}) => {
  const postId = match.params.postId;
  console.log(postId);
  const getPostById = (id) => {
    return posts.find((post)=>post.id.toString()===id);
  };
  const post = getPostById(postId);
  return (<h3>{
    post?post.label:`Post with Id:${postId} is not found`
  }</h3>);
};
Post.propTypes={
  posts: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};
export default Post;
