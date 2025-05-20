import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPost } from "../services/api";

const BlogPost = ( ) => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
        new Promise( async (resolve, reject) => { 
          const data = await getPost(id);
          console.log(data);
          setPost(data); 
        });
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.name}</p>
    </div>
  )
}

export default BlogPost