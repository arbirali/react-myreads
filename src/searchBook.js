import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom';

import Book from './book';

/**
*
* Search books
*
**/

class SearchBook extends Component {

  state = {
    searchQuery: ''
  }

  handleInput = (event) => {
    this.setState({
      searchQuery: event.target.value
    });
    this.props.onSearchBook(this.state.searchQuery);
  }

  render () {
    let { searchedBooks, updateShelf } = this.props;
    return (
      <div className="container">
        <Link to="/"><span className="back-arrow">&#8678;</span> Go Back</Link>
        <h1>Search Book(s)</h1>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="searchBook">Search Book</label>
            <div className="input-group mb-2">
              <DebounceInput
                minLength={2}
                debounceTimeout={300}
                className="form-control"
                value={this.state.searchQuery}
                id="searchBook"
                placeholder="Search book"
                onChange={ event => this.handleInput(event) }
              />
              <div className="input-group-append">
                <div className="input-group-text">Search</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row card-grid">
          {
            (searchedBooks && searchedBooks.length > 0) && searchedBooks.map( book => (
              <Book
                book={ book }
                key={ book.id }
                updateShelf={ updateShelf }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SearchBook;