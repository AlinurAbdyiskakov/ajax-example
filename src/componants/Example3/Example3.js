import axios from "axios";
import { useEffect, useState } from "react";
import Example1 from ".componants/Example1/Example1";
import classes from "./Example3.module.css";
const Example3 = ( { id } ) => {
  const [userId, setuserId] = useState("Loading...");
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id )
      .then(response => {
        setuserId(response.data.userId);
      });
  }, );
  useEffect(() => {
  }, []);
  return (
    <div className={classes.Example3}>
        {userId === "Loading..." ? null : <Example1 id={userId}/>}
    
    </div>
  );
}
export default Example3;