import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import { get } from './BooksAPI';
import UpdateShelf from './updateShelf';
import ContentLoader from './contentLoader';

/**
*
* Book's description and details
*
**/

class BookDetails extends Component {

  state = {
    book: {},
    loading: Boolean(true)
  }

  componentDidMount() {
    this.getBook(this.props.match.params.id);
  }

  getBook = (bookId) => {
    get(bookId).then(response => {
      this.setState({
        book: response,
        loading: Boolean(false)
      });
    });
  }

  onUpdateShelf = (book, shelf) => {
    this.props.updateShelf(book, shelf);
    this.getBook(this.props.match.params.id);
  }

  render () {
    const { book, loading } = this.state;
    let authors = book.authors && book.authors.map(author => <li key={author}>{author}</li>);

    return (
      <div className="container book-details">
        <Link to="/"><span className="back-arrow">&#8678;</span> Go Back</Link>
        {
          !loading ?
            (
              <div className="row">
                <div className="col">
                    <h1>
                      { book.title }
                      <UpdateShelf currShelf={book.shelf} updateShelf={this.onUpdateShelf} book={ book } />
                    </h1>
                    <h4>{ book.subtitle }</h4>
                    <ul className="details-list">
                      <li>
                        <strong className="title">Authors :</strong>
                        <ul className="authors-list details">
                          { authors }
                        </ul>
                      </li>
                      <li>
                        <strong className="title">Published on:</strong>
                        <span className="details">{book.publishedDate}</span>
                      </li>
                      <li>
                        <strong className="title">Total Pages: </strong>
                        <span className="details">{book.pageCount}</span>
                      </li>
                    </ul>
                    <p>{ book.description }</p>
                </div>
                <div className="col-sm-3">
                  <div className="image-frame">
                    { book.imageLinks && <img src={book.imageLinks.thumbnail} alt={ book.title } />}
                  </div>
                  <a href={book.previewLink} target="_blank" rel="noreferrer">View more details</a>
                </div>
              </div>
            ) :
            (<ContentLoader />)
        }
      </div>
    );
  }
}

export default BookDetails;
