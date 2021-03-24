import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import UpdateShelf from './updateShelf';
/**
*
* Book's Card
*
**/

class Book extends Component {

  render () {

    let { book, updateShelf, currShelf } = this.props;
    let authors = book.authors && book.authors.map(author => <li className="" key={author}>{author}</li>);
    return (
      <Col md="3">
        <Card>
          <div className="image-frame">
            <Link to={`book/${book.id}`} >{ book.imageLinks && <img src={book.imageLinks.thumbnail} alt={ book.title } />}</Link>
          </div>
          <Card.Body>
            <Card.Title>
              <Link to={`book/${book.id}`} >{ book.title }</Link>
              <UpdateShelf currShelf={ currShelf } updateShelf={updateShelf} book={ book } />
            </Card.Title>
            <strong>Authors:</strong>
            <ul className="authors-list">
              { authors }
            </ul>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

Book.propTypes = {
  book: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default Book;
