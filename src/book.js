import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

import UpdateShelf from './updateShelf';
/**
*
* Book's Card
*
**/

function Book (props) {

  let { book, updateShelf } = props;
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
            <UpdateShelf currShelf={book.shelf} updateShelf={updateShelf} book={ book } />
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

export default Book;

