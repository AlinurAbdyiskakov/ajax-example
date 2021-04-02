import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Example4.module.css";
import Example1 from '../Example1/Example1';


const Example4 = ({ id }) => {
  const [userId, setUserId] = useState("Loading...");

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        setUserId(response.data.userId);
      });
  }, []);

  useEffect(() => {
  }, []);

  return (
    <div className={classes.Example4}>
      {userId == "Loading..." ? null : <Example1 id={userId} /> }
    </div>
  );
}

export default Example4;