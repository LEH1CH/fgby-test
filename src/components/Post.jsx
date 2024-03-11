import { useParams } from 'react-router-dom';
import styles from './Post.module.css';

const Post = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === parseInt(postId));

  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
