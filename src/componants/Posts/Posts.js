
import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Posts.module.css";

const Posts=() => {
  const[post,setPosts]=useState([]);

useEffect(()=>{ 
   axios.get('https://jsonplaceholder.typicode.com/posts')
   .then(({data}) => {
        setPosts(data.slice(0,10));
   });
   },[]);


 const results = post.map(post =>(
     <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
 ));


  return (
    <div className={classes.Posts}>
  {results}
    </div>
  );
}

export default Posts;