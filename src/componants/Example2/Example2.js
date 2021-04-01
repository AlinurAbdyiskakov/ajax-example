import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Example2.module.css";
const Example2 = ({id}) => {
  const [title, setTitle] = useState("Loading...");
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/' + id)
      .then(response => {
        setTitle(response.data.title);
      });
  }, []);
  useEffect(() => {
  }, []);
  return (
    <div className={classes.Example2}>
      {title}
    </div>
  );
}
export default Example2;