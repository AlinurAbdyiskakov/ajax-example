import './App.css';
import Posts from"./componants/Posts/Posts";
import Comments from"./componants/Comments/Comments";

import Albums from"./componants/Albums/Albums";
import Photos from"./componants/Photos/Photos";
import Todos from"./componants/Todos/Todos";
import Users from"./componants/Users/Users";


function App(){
  return (
    <div className="App">
  <Posts/>
  <hr></hr>
  <Comments/> 
  <hr></hr>
  <Albums/> 
  <hr></hr>
  <Photos/>
   <hr></hr>
  <Todos/>
   <hr></hr>
 < Users/>
    </div>
  );
  }

export default App;
