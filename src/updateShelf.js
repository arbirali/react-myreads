import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { StartCase } from 'react-lodash';

class UpdateShelf extends Component {

  state = {
    shelves: ['currentlyReading', 'wantToRead', 'read', 'none']
  }

  handleClick = (event) => {
    const { currShelf, book } = this.props;
    if(event.target.name !== currShelf) {
      this.props.updateShelf(book, event.target.name);
    }
  }

  render () {
    let { currShelf } = this.props;
    let { shelves } = this.state;
    return (
      <DropdownButton id="dropdown-basic-button" variant="default" menuAlign="right" title="&#8942;">
        <Dropdown.ItemText>Move to ...</Dropdown.ItemText>
        <Dropdown.Divider />
        {
          shelves.map(shelf => {
            return <Dropdown.Item
                    href="#"
                    key={shelf}
                    name={shelf}
                    onClick={(e) => {this.handleClick(e)}}
                    className={`${shelf === currShelf ? 'active': ''}`}
                    >
                    <StartCase string={shelf} />
                  </Dropdown.Item>
          })
        }
      </DropdownButton>
    );
  }
}

export default UpdateShelf;
