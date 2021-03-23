import React, { Component } from 'react';
import { StartCase } from 'react-lodash';
import { Container, Row, Col } from 'react-bootstrap';

import Book from './book';

class BookShelf extends Component {

  render () {
    let { currShelf, books, updateShelf } = this.props;
    const currShelfBooks = books.filter(book => book.shelf === currShelf);
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4"><StartCase string={ currShelf } /></h2>
          </Col>
        </Row>
        <Row className="card-grid">
          { currShelfBooks.map(book => (
            <Book book={book} updateShelf={updateShelf} key={book.id} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookShelf;
