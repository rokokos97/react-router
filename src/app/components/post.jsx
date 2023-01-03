import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';


const Post = ({posts, id, history}) => {
  const historyHooks = useHistory();
  const getPostById = (id) => {
    return posts.find((post)=>post.id.toString()===id);
  };
  const post = getPostById(id);
  const handelSave = () => {
    historyHooks.replace('/posts');
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
        className={'btn btn-warning btn-lg m-1'}
        onClick={handelEdit}>Edit</button>
      <button
        className={'btn btn-danger btn-lg m-1'}
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
