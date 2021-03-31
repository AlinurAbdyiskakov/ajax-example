import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Comments.module.css";

const Comments=() => {
  const[comments,setComments]=useState([]);

useEffect(()=>{ 
   axios.get('https://jsonplaceholder.typicode.com/comments')
   .then(({data}) => {
    setComments(data.slice(0,10));
   });
   },[]);


 const results = comments.map(comments =>(
     <article key={comments.id}>
      <p>{comments.body}</p>
      <h4>{comments.name}</h4>
     <h6>{comments.email}</h6>
     <h3>{comments.postId}</h3>
    </article>
 ));


  return (
    <div className={classes.Comments}>
  {results}
    </div>
  );
}

export default Comments;