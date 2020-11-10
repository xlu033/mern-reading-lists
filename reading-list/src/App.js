<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 18fc9a7e177b794d61d4635722a27ebc8d8e8443
  );
}

export default App;
