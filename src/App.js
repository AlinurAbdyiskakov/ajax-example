
import { useState } from 'react';
import './App.css';
// import FullPost from './componants/FullPost/FullPost';
// import Posts from './componants/Posts/Posts';
import Example1 from './componants/Example1/Example1';
import Example2 from './componants/Example2/Example2';
function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  return (
    <div className="App">
      <Example1/>
      <Example2/>
      {/* <FullPost id={selectedPost} />
      <Posts setSelectedPost={setSelectedPost} /> */}
    </div>
  );
}

export default App;

