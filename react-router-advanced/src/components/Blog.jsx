import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Hello React" },
  { id: 2, title: "Advanced Routing" },
  { id: 3, title: "Protected Routes Explained" },
];

export default function Posts() {
  return (
    <div>
      <h2>📰 Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
