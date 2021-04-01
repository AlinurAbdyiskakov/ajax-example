
import { useState } from 'react';
import './App.css';
// import FullPost from './componants/FullPost/FullPost';
// import Posts from './componants/Posts/Posts';
import Example1 from 'componants/../../Example1/Example1';
import Example2 from './componants/Example2/Example2';
import Example3 from './componants/Example3/Example3';
import Photos from './componants/Photos/Photos';
function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  return (
    <div className="App">
    <Example1 id={1}/>
      <Example2 id={4}/>
      <Photos id={250}/>
      <Example3 id={30}/>
      {/* <FullPost id={selectedPost} />
      <Posts setSelectedPost={setSelectedPost} /> */}
    </div>
  );
}

export default App;

