//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";
// import data 

const PostsPage = (props) => {
  // set up state for your data
  const {data, searchTerm} = props

  const checkSearch = (item) => {
    return item.username.toLowerCase().includes(searchTerm.toLowerCase())
  };

  return (
    <div className="posts-container-wrapper">
      {data.filter((item) => 
        checkSearch(item)
      ).map((item, index) =>
        <Post post={item} key={index}/>
      )}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

