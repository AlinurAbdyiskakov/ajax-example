
import { useState } from 'react';
import './App.css';
import FullPost from './componants/FullPost/FullPost';
import Posts from './componants/Posts/Posts';

function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  return (
    <div className="App">
      <FullPost id={selectedPost} />
      <Posts setSelectedPost={setSelectedPost} />
    </div>
  );
}

export default App;

