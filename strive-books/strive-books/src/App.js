import "./App.css";
import fantasy from "./Data/fantasy.json";
import BookList from "./Components/BookList";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList books={fantasy} />
      </header>
    </div>
  );
}

export default App;
