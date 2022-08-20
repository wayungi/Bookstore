/** @format */
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <div className={styles.navbar}>
    <div>
      <h1>Bookstore CMS</h1>
    </div>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/category">CATEGORIES</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
