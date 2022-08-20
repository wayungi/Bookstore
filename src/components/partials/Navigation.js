/** @format */
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
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
