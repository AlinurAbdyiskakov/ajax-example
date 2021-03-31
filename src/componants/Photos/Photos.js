import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Photos.module.css";

const Photos=() => {
  const[photos,setPhotos]=useState([]);

useEffect(()=>{ 
   axios.get('https://jsonplaceholder.typicode.com/photos')
   .then(({data}) => {
    setPhotos(data.slice(0,10));
   });
   },[]);


 const results = photos.map(photos =>(
     <article key={photos.id}>
      <h2>{photos.title}</h2>
      <p>{photos.thumbnailUrl}</p>
      <h6>{photos.url}</h6>
      <h5>{photos.albumId}</h5>
    </article>
 ));


  return (
    <div className={classes.Photos}>
  {results}
    </div>
  );
}

export default Photos;