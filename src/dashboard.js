import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './bookShelf';

/**
*
* Books for Shelves
*
**/

class Dashboard extends Component {

  render () {
    let { books, shelves, updateShelf } = this.props;
    return (
      <div>
        {
          shelves.map( shelf => (
            <BookShelf
              key={shelf}
              books={ books }
              shelves={shelves}
              currShelf={shelf}
              updateShelf={ updateShelf }
            />
          ))
        }
        <Link className="add-book btn btn-lg btn-primary" to="/search">+</Link>
      </div>
    )
  }
}

export default Dashboard;
