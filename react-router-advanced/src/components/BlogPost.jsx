import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams(); // grabs the ":id" from the URL

  return <h3>Showing details for Post #{id}</h3>;
}
