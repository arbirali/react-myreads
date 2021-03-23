import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard';
import SearchBook from './searchBook';
import BookDetails from './bookDetails';
import { getAll, update, search } from './BooksAPI';

import './sass/main.scss';

class App extends Component {

  state = {
    books: [],
    shelves: [],
    searchedBooks: []
  }

  componentDidMount () {
    this.updateShelfBooks();
  }

  handleShelves = ( books ) => {
    let shelves = [];
    books.forEach(book => {
      if(shelves.indexOf(book.shelf) === -1) {
        shelves.push(book.shelf);
      }
    })
    return shelves;
  }

  updateShelfBooks = () => {
    getAll().then( books => {
      this.setState({
        books: books,
        shelves: this.handleShelves(books)
      });
    });
  }

  onUpdateShelf = (book, shelf) => {
    update(book, shelf).then(response => {
      this.updateShelfBooks();
    });
  }

  searchBook = (query) => {
    search(query).then(response => {
      console.log(response);
      this.setState({
        searchedBooks: response
      });
    });
  }

  render () {
    let { books, shelves } = this.state;
    return (
      <div className="wrapper">
        <header className="header">
          <h1 className="text-center">My Reads</h1>
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard
                  books={ books }
                  shelves={shelves}
                  updateShelf={ this.onUpdateShelf}
              />
            </Route>
            <Route path="/search">
              <SearchBook
                onSearchBook={this.searchBook}
                searchedBooks={this.state.searchedBooks}
                updateShelf={ this.onUpdateShelf}
              />
            </Route>
            <Route
              path="/book/:id"
              render={(props) =>
                <BookDetails
                  {...props}
                  updateShelf={ this.onUpdateShelf }
                />
              }
               />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
