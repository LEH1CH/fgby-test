import { Link,} from 'react-router-dom';
import styles from './PostList.module.css';

const PostList = ({ posts }) => {
  return (
    <div className={styles.postList}>
      <h2>СПИСОК ПОСТОВ</h2>
      <ul className='ul__list'>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
