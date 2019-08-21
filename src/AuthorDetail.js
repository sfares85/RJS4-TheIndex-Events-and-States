import React, { Component } from "react";
import BookRows from "./BookRows";

class AuthorDetail extends Component {
  render() {
    const authorBooks = this.props.author.books.map(book => (
      <tr>
        <td>{book.title}</td>
        <td>
          {this.props.author.first_name} {this.props.author.last_name}
        </td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {this.props.author.first_name} {this.props.author.last_name}{" "}
          </h3>
          <img
            src={this.props.author.imageUrl}
            className="img-thumbnail"
            alt={this.props.author.first_name}
          />
        </div>
        <BookRows authorBooks={authorBooks} />
      </div>
    );
  }
}

export default AuthorDetail;
