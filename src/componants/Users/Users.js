import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Users.module.css";

const Users=() => {
  const[users,setUsers]=useState([]);

useEffect(()=>{ 
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(({data}) => {
    setUsers(data.slice(0,10));
   });
   },[]);


 const results = users.map(users =>(
      <article key={users.id}>
      <h2>{users.name}</h2>
      <p>{users.email}</p>
      <h6>{users.city}</h6>
      <h5>{users.website}</h5>
      <h4>{users.phone}</h4>
      <q>{users.catchPhrase}</q>
      <b>{users.zipcode}</b>
      <strong>{users.street}</strong>
    
 
     
    </article>
 ));


  return (
    <div className={classes.Users}>
  {results}
    </div>
  );
}

export default Users;