import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EachBook extends Component {

  render() {
    // destructuring the props object
    const { book, changeShelf } = this.props

    // for each book-object, this child component takes the following keys and
    // renders the values: title, authors, imageLinks, and shelf
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={(event) => changeShelf(book, event)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.join(', ')}</div>
        </div>
      </li>
    )
  }
}

EachBook.propTypes = {
  // verifies the book prop is an object and the changeShelf prop is a function
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default EachBook
