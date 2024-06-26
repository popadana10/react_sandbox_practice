import "./styles.css";

export const book = {
  title: "",
  author: "",
  genre: "",
  isRead: true,
};

function App() {
  function handleClick() {
    book.title = "title";
    book.author = "author";
    book.genre = "genre";
    book.isRead = true;
  }

  return (
    <div id="app">
      <h1>Add book</h1>
      <div>
        <label>Title</label>
        <input type="text" />
      </div>

      <div>
        <label>Author</label>
        <input type="text" />
      </div>

      <div>
        <label>Genre</label>
        <select name="genre">
          <option value="mystery">Mystery</option>
          <option value="science_fiction">Science Fiction</option>
          <option value="history_fiction">Historical Fiction</option>
        </select>
      </div>

      <button onClick={handleClick}>Add book</button>
    </div>
  );
}

export default App;
