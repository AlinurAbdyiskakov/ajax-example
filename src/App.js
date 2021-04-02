import { useState } from 'react';
import './App.css';
import Example1 from "./componants/Example1/Example1";
import Example2 from "./componants/Example2/Example2";
import Example3 from "./componants/Example3/Example3";
import Example4 from "./componants/Example4/Example4";
// import FullPost from './components/FullPost/FullPost';
// import Posts from './components/Posts/Posts';

function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  return (
    <div className="App">
      {/* <FullPost id={selectedPost} />
      <Posts setSelectedPost={setSelectedPost} /> */}

      <Example1 id={7}/>
      <Example1 id={80}/>
      <Example2 id={50} />
      <Example2 id={7} />
      <Example3 id={9} />
      <Example4 id={5}/>
    </div>
  );
}

export default App;