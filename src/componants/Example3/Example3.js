import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Example3.module.css";
const Example3 = ({ id }) => {
  const [url, setUrl] = useState("Loading...");
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos/' + id)
      .then(response => {
        setUrl(response.data.url);
      });
  }, []);
  useEffect(() => {
  }, []);
  return (
    <div className={classes.Example3}>
        <img src="https://via.placeholder.com/600/92c952" />
      
    </div>
  );
}
export default Example3;