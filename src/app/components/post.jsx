import React from 'react';
import PropTypes from 'prop-types';


const Post = ({posts, id}) => {
  const getPostById = (id) => {
    return posts.find((post)=>post.id.toString()===id);
  };
  const post = getPostById(id);
  return (<h3>{
    post?post.label:`Post with Id:${id} is not found`
  }</h3>);
};
Post.propTypes={
  posts: PropTypes.array.isRequired,
  id: PropTypes.string,
};
export default Post;
