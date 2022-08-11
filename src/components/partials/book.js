/** @format */

import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      <p>{title}</p>
      <p>{author}</p>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
