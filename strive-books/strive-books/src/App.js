import "./App.css";
import fantasy from "./Data/fantasy.json";
import BookList from "./Components/BookList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./Components/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact render={() => <BookList books={fantasy} />} />
          <Route path="/register" exact component={Registration} />
        </header>
      </div>
    </Router>
  );
}

export default App;
