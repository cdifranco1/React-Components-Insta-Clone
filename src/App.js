/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import PostsPage from './components/PostsContainer/PostsPage.js';
import SearchBar from './components/SearchBar/SearchBarContainer.js';
import dummyData from './dummy-data'


const App = () => {
  const [results] = useState(dummyData)
  const [searchTerm, setSearchTerm] = useState('')

  const setSearchHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="App">
      <SearchBar 
        value={searchTerm}
        onChange={setSearchHandler}
      />
      <PostsPage 
        data={results}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default App;
