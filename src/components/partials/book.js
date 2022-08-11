/** @format */

const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      <p>{title}</p>
      <p>{author}</p>
    </li>
  );
};

export default Book;
