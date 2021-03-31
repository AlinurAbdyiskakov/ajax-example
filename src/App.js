import { useState } from 'react';
import FullPost from './componants/FullPost/FullPost';
import Posts from './components/Posts/Posts';

// import Albums from"./componants/Albums/Albums";
// import Photos from"./componants/Photos/Photos";
// import Todos from"./componants/Todos/Todos";
// import Users from"./componants/Users/Users";
import './App.css';


function App(){
  const[selectedPost,setSelectedPost] =useState[0]
  return (
    <div className="App">
 <FullPost id={selectedPost} />
      <Posts setSelectedPost={setSelectedPost} />
  {/* <hr></hr>
  <Comments/> 
  <hr></hr>
  <Albums/> 
  <hr></hr>
  <Photos/>
   <hr></hr>
  <Todos/>
   <hr></hr>
 < Users/> */}
    </div>
  );
  }

export default App;
