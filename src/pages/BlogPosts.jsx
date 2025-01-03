import { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import { Link } from "react-router-dom";
import Button from "../components/Template/Button";
import Icon from "../components/Template/Icon";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);
  return (
    <>
      <div className="product-table">
        <div className="add-product">
          <Button>
            New post
            <Icon name="icon-plus-circle" />
          </Button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.published}</td>
                <td>
                  <Link to={`/blog/${post.id}`}>View</Link>
                  <Link to={`/blog/${post.id}/edit`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BlogPosts;
