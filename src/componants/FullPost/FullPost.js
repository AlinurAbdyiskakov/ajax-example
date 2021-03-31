import classes from "./FullPost.module.css";
import Comments from"./componants/comments/comments";
const FullPost = ({ id }) => {
  const[post,setPost]=useState({
  title:"Loading...",
  body:"With for it!",
  userId:0,
    });

    useEffect(()=>{ 
      axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
      .then((response) => {
          const post =response.data;
       setPost(post);
      });
      },[id]);
  return (
    <main className={classes.FullPost}>
      <h1>{post.name}</h1>
      {/* <Author userId={post.userId}/> */}
      <p>{post.body}</p>
      <Comments postId={id}/>
    </main>
  );
}
export default FullPost;