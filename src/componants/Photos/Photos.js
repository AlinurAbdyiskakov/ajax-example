import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Photos.module.css";

const Photos=({id}) => {
  const[thumbnailUrl,setThumbnailUrl]=useState(["Loading..."]);

useEffect(()=>{ 
   axios.get('https://jsonplaceholder.typicode.com/photos/1' + id)
   .then(response => {
    setThumbnailUrl(response.data.thumbnailUrl);
  });
}, []);
useEffect(() => {
}, []);
return (
<div className={classes.Photos}>
 <img src={thumbnailUrl}></img>
</div>
);
}

export default Photos;