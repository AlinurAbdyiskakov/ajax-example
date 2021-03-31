
import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Albums.module.css";

const Albums=() => {
  const[albums,setAlbums]=useState([]);

useEffect(()=>{ 
   axios.get('https://jsonplaceholder.typicode.com/albums')
   .then(({data}) => {
    setAlbums(data.slice(0,10));
   });
   },[]);


 const results = albums.map(albums =>(
     <article key={albums.id}>
      <h2>{albums.title}</h2>
      <p>{albums.userId}</p>
    </article>
 ));


  return (
    <div className={classes.Albums}>
  {results}
    </div>
  );
}

export default Albums;