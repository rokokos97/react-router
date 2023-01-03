import React from 'react';
import PropTypes from 'prop-types';


const Post = ({posts, id, history}) => {
  const getPostById = (id) => {
    return posts.find((post)=>post.id.toString()===id);
  };
  const post = getPostById(id);
  const handelSave = () => {
    history.replace('/posts');
  };
  const handelEdit = () => {
    history.push(`/posts`);
  };
  return (
    <>
      <h3>{
        post?post.label:`Post with Id:${id} is not found`
      }</h3>
      <button
        className={'btn btn-warning m-3'}
        onClick={handelEdit}>Edit</button>
      <button
        className={'btn btn-danger m-3'}
        onClick={handelSave}>Save</button>
    </>
  );
};
Post.propTypes={
  history: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  id: PropTypes.string,
};
export default Post;
