import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Example1.module.css";
const Example1 = ({id}) => {
  const [email, setEmail] = useState("Loading...");
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then(response => {
        setEmail(response.data.email);
      });
  }, []);
  useEffect(() => {
  }, []);
  return (
    <div className={classes.Example1}>
      {email}
    </div>
  );
}
export default Example1;