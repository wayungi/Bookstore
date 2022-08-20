/* eslint-disable global-require */
/** @format */
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <div className={styles.navbar}>
    <div className={styles.navbarLeft}>
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <ul className={styles.listItem}>
        <li>
          <Link to="/" className={styles.linkDefault}>
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="/category" className={styles.linkDefault}>
            CATEGORIES
          </Link>
        </li>
      </ul>
    </div>

    <div className={styles.navbarRight}>
      <img src={require('../../images/user.png')} alt="user logo" className={styles.profile} />
    </div>
  </div>
);

export default Navigation;
