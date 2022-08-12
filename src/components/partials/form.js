/** @format */

const Form = () => (
  <form>
    <div>
      <h1>Add New BooK</h1>
    </div>
    <div>
      <input type="text" required id="title" placeholder="Book Title" />
    </div>
    <div>
      <input type="text" required id="author" placeholder="Author" />
    </div>
    <div>
      <button type="submit">Add Book</button>
    </div>
  </form>
);

export default Form;
