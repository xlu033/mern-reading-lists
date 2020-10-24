import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar";
import CreateBook from "./components/create-book";
import CreateUser from "./components/create-user";
import BookList from "./components/book-list";
import EditBook from "./components/edit-book";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={BookList} />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/create" component={CreateBook} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
